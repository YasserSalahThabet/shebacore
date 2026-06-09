declare const process: {
  env: Record<string, string | undefined>;
};

const USER_ENV = "SHEBACORE_ADMIN_USER";
const PASSWORD_ENV = "SHEBACORE_ADMIN_PASSWORD";
const LOGIN_PATH = "/admin-login";
const LOGOUT_PATH = "/admin-logout";
const ADMIN_API_PREFIX = "/api/admin";
const SESSION_COOKIE = "shebacore_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 8;

export const config = {
  matcher: ["/admin", "/admin/:path*", "/admin-login", "/admin-logout", "/api/admin/:path*"],
};

function htmlResponse(html: string, status = 200) {
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function jsonResponse(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function notConfigured() {
  return htmlResponse(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ShebaCore Admin</title>
    <style>
      body{margin:0;min-height:100vh;display:grid;place-items:center;background:#090b10;color:#f8fafc;font-family:system-ui,-apple-system,Segoe UI,sans-serif}
      .card{max-width:460px;margin:24px;padding:28px;border:1px solid rgba(239,68,68,.28);border-radius:18px;background:linear-gradient(145deg,rgba(20,24,33,.92),rgba(14,17,24,.86));box-shadow:0 24px 80px rgba(0,0,0,.45)}
      h1{margin:0 0 10px;font-size:24px}p{margin:0;color:#9ca3af;line-height:1.6}.brand{color:#ef4444;font-weight:700;letter-spacing:.18em;text-transform:uppercase;font-size:12px;margin-bottom:14px}
    </style>
  </head>
  <body><main class="card"><div class="brand">ShebaCore Admin</div><h1>Admin authentication is not configured.</h1><p>Add SHEBACORE_ADMIN_USER and SHEBACORE_ADMIN_PASSWORD in Vercel, then redeploy.</p></main></body>
</html>`,
    503
  );
}

function cleanEnvValue(value: string | undefined) {
  if (!value) return undefined;

  const trimmed = value.trim();
  const hasSingleQuotes = trimmed.startsWith("'") && trimmed.endsWith("'");
  const hasDoubleQuotes = trimmed.startsWith('"') && trimmed.endsWith('"');

  if ((hasSingleQuotes || hasDoubleQuotes) && trimmed.length >= 2) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

function sessionToken(username: string, password: string) {
  return btoa(`${username.toLowerCase()}:${password}`).replace(/=+$/g, "");
}

function getCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function safeNextPath(value: FormDataEntryValue | string | null) {
  const next = typeof value === "string" ? value : "/admin";
  return next.startsWith("/admin") ? next : "/admin";
}

function redirectToLogin(request: Request, error = false) {
  const requestUrl = new URL(request.url);
  const url = new URL(LOGIN_PATH, request.url);
  url.searchParams.set("next", `${requestUrl.pathname}${requestUrl.search}`);
  if (error) url.searchParams.set("error", "1");
  return Response.redirect(url, 302);
}

function redirectWithCookie(location: URL, cookie: string) {
  return new Response(null, {
    status: 303,
    headers: new Headers({
      "Cache-Control": "no-store",
      "Location": location.toString(),
      "Set-Cookie": cookie,
    }),
  });
}

function redirectWithSession(request: Request, next: string, token: string) {
  return redirectWithCookie(
    new URL(next, request.url),
    `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; Max-Age=${SESSION_MAX_AGE}; HttpOnly; Secure; SameSite=Strict`
  );
}

function logout(request: Request) {
  return redirectWithCookie(
    new URL(LOGIN_PATH, request.url),
    `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`
  );
}

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const isAdminApi = url.pathname.startsWith(ADMIN_API_PREFIX);
  const expectedUser = cleanEnvValue(process.env[USER_ENV]);
  const expectedPassword = cleanEnvValue(process.env[PASSWORD_ENV]);

  if (!expectedUser || !expectedPassword) {
    return isAdminApi
      ? jsonResponse({ error: "Admin authentication is not configured." }, 503)
      : notConfigured();
  }

  const expectedToken = sessionToken(expectedUser, expectedPassword);
  const currentToken = getCookie(request, SESSION_COOKIE);
  const hasValidSession = Boolean(
    currentToken && timingSafeEqual(currentToken, expectedToken)
  );

  if (url.pathname === LOGOUT_PATH) {
    return logout(request);
  }

  if (url.pathname === LOGIN_PATH) {
    if (request.method === "POST") {
      return request.formData().then((form) => {
        const username = String(form.get("username") ?? "").trim();
        const password = String(form.get("password") ?? "").trim();
        const next = safeNextPath(form.get("next"));
        const validUser = timingSafeEqual(username.toLowerCase(), expectedUser.toLowerCase());
        const validPassword = timingSafeEqual(password, expectedPassword);

        if (validUser && validPassword) {
          return redirectWithSession(request, next, expectedToken);
        }

        const redirectUrl = new URL(LOGIN_PATH, request.url);
        redirectUrl.searchParams.set("error", "1");
        redirectUrl.searchParams.set("next", next);
        return Response.redirect(redirectUrl, 303);
      });
    }

    if (hasValidSession) {
      const next = safeNextPath(url.searchParams.get("next"));
      return Response.redirect(new URL(next, request.url), 302);
    }

    return;
  }

  if (!hasValidSession) {
    return isAdminApi
      ? jsonResponse({ error: "Unauthorized admin request." }, 401)
      : redirectToLogin(request);
  }
}
