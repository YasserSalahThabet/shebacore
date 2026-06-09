# ShebaCore Admin Auth

The `/admin`, `/admin/*`, and `/api/admin/*` routes are protected by Vercel Routing Middleware using the ShebaCore admin session.

## Required Vercel Environment Variables

Set these in Vercel before promoting the admin pages to production:

- `SHEBACORE_ADMIN_USER`
- `SHEBACORE_ADMIN_PASSWORD`

If either variable is missing, the admin routes fail closed with `503 Admin authentication is not configured`.

## Optional Phone Task Integration

The admin dashboard can show tasks and reminders created from Todoist on a phone.

Set this optional Vercel Environment Variable for Production and Preview:

- `TODOIST_API_TOKEN`

The token is used only by the server-side `/api/admin/todoist-tasks` route. Do not add Todoist tokens to frontend code.

Suggested Todoist labels for cleaner dashboard grouping:

- `client`
- `follow-up`
- `contract`
- `payment`
- `prototype`
- `urgent`

## Notes

- Do not commit real passwords, tokens, MCP keys, or API keys to this repository.
- This protects the frontend admin shell and admin API routes at the edge.
- Any future Sheba AI backend, MCP tools, or automation controls must keep secrets server-side only.
- Rotate the password after sharing access with anyone.
