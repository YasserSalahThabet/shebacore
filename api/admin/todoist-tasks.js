const TODOIST_TASKS_URL = "https://api.todoist.com/api/v1/tasks?limit=50";

function cleanEnvValue(value) {
  if (!value) return undefined;

  const trimmed = value.trim();
  const hasSingleQuotes = trimmed.startsWith("'") && trimmed.endsWith("'");
  const hasDoubleQuotes = trimmed.startsWith('"') && trimmed.endsWith('"');

  if ((hasSingleQuotes || hasDoubleQuotes) && trimmed.length >= 2) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function sendJson(response, status, payload) {
  response.status(status).setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.json(payload);
}

function normalizeTask(task) {
  return {
    id: task.id,
    content: task.content,
    description: task.description || "",
    labels: Array.isArray(task.labels) ? task.labels : [],
    priority: task.priority || 1,
    projectId: task.project_id || null,
    sectionId: task.section_id || null,
    due: task.due
      ? {
          date: task.due.date || null,
          datetime: task.due.datetime || null,
          string: task.due.string || null,
          isRecurring: Boolean(task.due.is_recurring),
        }
      : null,
    url: task.url || null,
  };
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return sendJson(response, 405, { error: "Method not allowed" });
  }

  const token = cleanEnvValue(process.env.TODOIST_API_TOKEN);

  if (!token) {
    return sendJson(response, 200, {
      configured: false,
      source: "todoist",
      tasks: [],
      message: "Set TODOIST_API_TOKEN in Vercel to connect phone reminders.",
    });
  }

  try {
    const todoistResponse = await fetch(TODOIST_TASKS_URL, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const rawBody = await todoistResponse.text();

    if (!todoistResponse.ok) {
      return sendJson(response, 502, {
        configured: true,
        source: "todoist",
        tasks: [],
        error: "Todoist rejected the request. Check TODOIST_API_TOKEN in Vercel.",
        status: todoistResponse.status,
      });
    }

    const payload = rawBody ? JSON.parse(rawBody) : {};
    const tasks = Array.isArray(payload.results) ? payload.results : [];

    return sendJson(response, 200, {
      configured: true,
      source: "todoist",
      fetchedAt: new Date().toISOString(),
      nextCursor: payload.next_cursor || null,
      tasks: tasks.map(normalizeTask),
    });
  } catch (error) {
    return sendJson(response, 502, {
      configured: true,
      source: "todoist",
      tasks: [],
      error: "Could not reach Todoist right now.",
    });
  }
}
