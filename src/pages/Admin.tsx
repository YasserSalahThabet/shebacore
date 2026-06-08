import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Bot,
  Database,
  FileText,
  Globe2,
  Image,
  Inbox,
  Lock,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const overview = [
  { label: "Site", value: "Live", detail: "Public website is active", icon: Globe2 },
  { label: "Admin", value: "Shell", detail: "Auth and backend pending", icon: ShieldCheck },
  { label: "AI", value: "Ready to connect", detail: "Local Sheba AI can be linked later", icon: Bot },
  { label: "Leads", value: "Planned", detail: "Contact inbox workflow placeholder", icon: Inbox },
];

const workspaces = [
  {
    title: "Website Content",
    description: "Prepare updates for pages, services, offers, case studies, and announcements.",
    icon: FileText,
  },
  {
    title: "Contact Leads",
    description: "Future home for website inquiries, consultation requests, and follow-up status.",
    icon: Users,
  },
  {
    title: "Sheba AI Console",
    description: "Launch the AI workspace, tool planning, and agent prompts from one place.",
    icon: Sparkles,
    href: "/admin/ai",
  },
  {
    title: "Media Pipeline",
    description: "Plan image, video, and campaign assets before connecting generation tools.",
    icon: Image,
  },
  {
    title: "Data and Integrations",
    description: "Track future CRM, analytics, MCP, automation, and backend connections.",
    icon: Database,
  },
  {
    title: "Settings and Access",
    description: "Define admins, auth, deployment protection, and environment requirements.",
    icon: Settings,
  },
];

const guardrails = [
  "No private tokens or API keys are stored in this frontend.",
  "Real admin access still needs Vercel protection or an auth provider.",
  "Sheba AI backend should stay behind a secure API before public use.",
];

const Admin = () => {
  return (
    <Layout>
      <section className="pt-32 pb-10 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Lock className="h-3.5 w-3.5" />
                Admin preview
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                ShebaCore <span className="text-primary">Command</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                A private operating console for the ShebaCore website, leads, content, media planning, and the Sheba AI workspace.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/admin/ai">
                  Open AI Console
                  <Bot className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">View Site Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="section-container space-y-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overview.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="glass-card p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{item.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {workspaces.map((workspace) => {
              const Icon = workspace.icon;
              const content = (
                <div className="glass-card h-full p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow-sm">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{workspace.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{workspace.description}</p>
                  {workspace.href && (
                    <div className="mt-5 text-sm font-semibold text-primary">Open workspace</div>
                  )}
                </div>
              );

              return workspace.href ? (
                <Link key={workspace.title} to={workspace.href} className="block h-full">
                  {content}
                </Link>
              ) : (
                <div key={workspace.title}>{content}</div>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Rollout Plan</h2>
                  <p className="text-sm text-muted-foreground">Safe path before connecting real controls.</p>
                </div>
              </div>
              <div className="space-y-4">
                {["Design and review this admin shell", "Add real authentication", "Connect content and lead workflows", "Connect Sheba AI through a secure backend"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-lg border border-border/60 bg-secondary/20 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Security Notes</h2>
                  <p className="text-sm text-muted-foreground">This first pass is intentionally safe.</p>
                </div>
              </div>
              <div className="space-y-3">
                {guardrails.map((item) => (
                  <div key={item} className="rounded-lg border border-border/60 bg-background/30 p-4 text-sm leading-6 text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
