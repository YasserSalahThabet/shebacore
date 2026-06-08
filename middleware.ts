declare const process: {
  env: Record<string, string | undefined>;
};

const REALM = "ShebaCore Admin";
const USER_ENV = "SHEBACORE_ADMIN_USER";
const PASSWORD_ENV = "SHEBACORE_ADMIN_PASSWORD";

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};

function unauthorized() {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      "Cache-Control": "no-store",
    },
  });
}

function notConfigured() {
  return new Response("Admin authentication is not configured.", {
    status: 503,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

function parseBasicAuth(header: string | null) {
  if (!header) return null;

  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return null;

  try {
    const decoded = atob(encoded);
    const separator = decoded.indexOf(":");
    if (separator === -1) return null;

    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

export default function middleware(request: Request) {
  const expectedUser = process.env[USER_ENV];
  const expectedPassword = process.env[PASSWORD_ENV];

  if (!expectedUser || !expectedPassword) {
    return notConfigured();
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"));
  if (!credentials) {
    return unauthorized();
  }

  const validUser = timingSafeEqual(credentials.username, expectedUser);
  const validPassword = timingSafeEqual(credentials.password, expectedPassword);

  if (!validUser || !validPassword) {
    return unauthorized();
  }
}
