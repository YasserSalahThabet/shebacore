import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Bell,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  ExternalLink,
  ListTodo,
  RefreshCw,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type TodoistDue = {
  date: string | null;
  datetime: string | null;
  string: string | null;
  isRecurring: boolean;
};

type TodoistTask = {
  id: string;
  content: string;
  description: string;
  labels: string[];
  priority: number;
  due: TodoistDue | null;
  url: string | null;
};

type TaskResponse = {
  configured: boolean;
  source: "todoist";
  fetchedAt?: string;
  tasks: TodoistTask[];
  message?: string;
  error?: string;
};

const getRiyadhDateKey = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Riyadh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
};

const formatDueDate = (due: TodoistDue | null) => {
  if (!due?.date) return "No due date";

  const value = due.datetime || `${due.date}T12:00:00`;
  return new Intl.DateTimeFormat("en-SA", {
    month: "short",
    day: "numeric",
    hour: due.datetime ? "numeric" : undefined,
    minute: due.datetime ? "2-digit" : undefined,
  }).format(new Date(value));
};

const priorityLabel = (priority: number) => {
  if (priority >= 4) return "Urgent";
  if (priority === 3) return "High";
  if (priority === 2) return "Normal";
  return "Low";
};

const isClientTask = (task: TodoistTask) => {
  const text = `${task.content} ${task.description} ${task.labels.join(" ")}`;
  return /client|follow|contract|payment|call|proposal|invoice|phase|whatsapp/i.test(text);
};

const TaskRow = ({ task }: { task: TodoistTask }) => (
  <a
    href={task.url || undefined}
    target={task.url ? "_blank" : undefined}
    rel={task.url ? "noreferrer" : undefined}
    className="block rounded-xl border border-border/60 bg-background/35 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
  >
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div className="text-sm font-semibold leading-6 text-foreground">{task.content}</div>
        {task.description ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{task.description}</p> : null}
      </div>
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
        <Bell className="h-3 w-3" />
        {priorityLabel(task.priority)}
      </span>
    </div>
    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="h-3.5 w-3.5 text-primary" />
        {formatDueDate(task.due)}
      </span>
      {task.labels.slice(0, 3).map((label) => (
        <span key={label} className="rounded-full border border-border/60 px-2 py-1">
          {label}
        </span>
      ))}
    </div>
  </a>
);

export function TodoistTaskPanel() {
  const [data, setData] = useState<TaskResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/todoist-tasks", {
        credentials: "include",
        headers: { Accept: "application/json" },
      });
      const payload = (await response.json()) as TaskResponse;

      if (!response.ok) {
        throw new Error(payload.error || "Could not load Todoist tasks.");
      }

      setData(payload);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Could not load Todoist tasks.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadTasks();
  }, []);

  const groups = useMemo(() => {
    const todayKey = getRiyadhDateKey();
    const tasks = data?.tasks || [];

    const overdue = tasks.filter((task) => task.due?.date && task.due.date < todayKey);
    const today = tasks.filter((task) => task.due?.date === todayKey);
    const upcoming = tasks.filter((task) => task.due?.date && task.due.date > todayKey).slice(0, 6);
    const clientFollowUps = tasks.filter(isClientTask).slice(0, 6);

    return { today, overdue, upcoming, clientFollowUps };
  }, [data?.tasks]);

  const totalTasks = data?.tasks.length || 0;
  const configured = Boolean(data?.configured);

  return (
    <div id="tasks" className="scroll-mt-28 rounded-2xl border border-border/60 bg-card/45 p-5 backdrop-blur-xl md:p-6">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
            <ListTodo className="h-4 w-4" />
            Phone task inbox
          </div>
          <h2 className="text-2xl font-bold text-foreground">Tasks and Reminders</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Add reminders from Todoist on your phone and they appear here for daily execution.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="hero-outline" size="sm" onClick={() => void loadTasks()} disabled={isLoading} className="gap-2">
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://app.todoist.com/" target="_blank" rel="noreferrer" className="gap-2">
              Open Todoist
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>

      {error ? (
        <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm leading-6 text-destructive">
          <div className="mb-1 flex items-center gap-2 font-semibold">
            <AlertCircle className="h-4 w-4" />
            Task sync needs attention
          </div>
          {error}
        </div>
      ) : null}

      {!configured && !isLoading ? (
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-xl border border-primary/25 bg-primary/10 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Smartphone className="h-4 w-4 text-primary" />
              Connect phone capture
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Add `TODOIST_API_TOKEN` in Vercel Environment Variables for Production and Preview, then redeploy. After that, tasks created from Todoist mobile will show here.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/35 p-5">
            <div className="mb-3 text-sm font-semibold text-foreground">Suggested Todoist labels</div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {['client', 'follow-up', 'contract', 'payment', 'prototype', 'urgent'].map((label) => (
                <span key={label} className="rounded-full border border-border/60 px-2.5 py-1">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {[
              { label: "Today", value: groups.today.length, icon: CalendarCheck2 },
              { label: "Overdue", value: groups.overdue.length, icon: AlertCircle },
              { label: "Upcoming", value: groups.upcoming.length, icon: Clock3 },
              { label: "Client follow-ups", value: groups.clientFollowUps.length, icon: CheckCircle2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-xl border border-border/60 bg-background/35 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {item.label}
                  </div>
                  <div className="text-3xl font-bold text-foreground">{isLoading ? "..." : item.value}</div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-border/60 bg-background/35 p-4">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-semibold text-foreground">Execution queue</div>
              <div className="text-xs text-muted-foreground">
                {isLoading ? "Loading Todoist..." : `${totalTasks} active Todoist tasks`}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              {[...groups.overdue, ...groups.today, ...groups.clientFollowUps, ...groups.upcoming]
                .filter((task, index, list) => list.findIndex((item) => item.id === task.id) === index)
                .slice(0, 8)
                .map((task) => (
                  <TaskRow key={task.id} task={task} />
                ))}
            </div>

            {!isLoading && configured && totalTasks === 0 ? (
              <div className="rounded-xl border border-border/60 bg-card/45 p-5 text-sm leading-6 text-muted-foreground">
                No active Todoist tasks yet. Add one from your phone and refresh this panel.
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
