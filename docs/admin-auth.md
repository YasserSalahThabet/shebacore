# ShebaCore Admin Auth

The `/admin` and `/admin/*` routes are protected by Vercel Routing Middleware using HTTP Basic Auth.

## Required Vercel Environment Variables

Set these in Vercel before promoting the admin pages to production:

- `SHEBACORE_ADMIN_USER`
- `SHEBACORE_ADMIN_PASSWORD`

If either variable is missing, the admin routes fail closed with `503 Admin authentication is not configured`.

## Notes

- Do not commit real passwords, tokens, MCP keys, or API keys to this repository.
- This protects the frontend admin shell at the edge.
- Any future Sheba AI backend, MCP tools, or automation controls must keep secrets server-side only.
- Rotate the password after sharing access with anyone.
