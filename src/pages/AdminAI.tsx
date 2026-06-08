import { Link } from "react-router-dom";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Bot,
  Briefcase,
  CreditCard,
  FileText,
  Image,
  Lock,
  MessageSquare,
  Mic,
  Network,
  PlugZap,
  Search,
  Server,
  Settings2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const launchers = [
  {
    title: "Sales Agent",
    description: "Draft WhatsApp replies, follow-ups, proposal notes, and close-next-step messages.",
    icon: MessageSquare,
    prompt: "Act as my Sales Agent. Ask which client or deal I want to follow up with, then draft a short message.",
  },
  {
    title: "Contract Agent",
    description: "Turn scope notes into contract bullets, assumptions, terms, and DocuSeal template fields.",
    icon: FileText,
    prompt: "Act as my Contract Agent. Ask for client, project, price, and scope, then draft contract sections.",
  },
  {
    title: "Payment Agent",
    description: "Prepare payment-link descriptions, deposit requests, overdue reminders, and receipt messages.",
    icon: CreditCard,
    prompt: "Act as my Payment Agent. Ask for client, amount, currency, and due date, then draft the payment message.",
  },
  {
    title: "Project Agent",
    description: "Break deals into tasks, owners, due dates, delivery phases, and next actions.",
    icon: Briefcase,
    prompt: "Act as my Project Agent. Ask which deal I am delivering, then create a clear delivery checklist.",
  },
  {
    title: "Voice Command Agent",
    description: "Future voice layer for commands like create contract, prepare payment link, summarize client.",
    icon: Mic,
    prompt: "Act as my Voice Command router. Interpret the command, pick the right agent, and ask for approval.",
  },
  {
    title: "Media Agent",
    description: "Prepare brand visuals, posts, campaigns, short-video prompts, and service launch content.",
    icon: Image,
    prompt: "Act as my Media Agent. Ask what I am promoting and prepare visual or video prompts in my ShebaCore style.",
  },
];

const connectionItems = [
  { label: "Deal Desk Context", status: "UI ready", icon: Briefcase },
  { label: "Local Sheba AI", status: "Not connected", icon: Server },
  { label: "MCP Tools", status: "Planned", icon: PlugZap },
  { label: "Voice Commands", status: "Planned", icon: Mic },
  { label: "Ollama Models", status: "Planned", icon: Network },
  { label: "Admin Auth", status: "Protected", icon: Lock },
];

const buildPath = [
  "Connect Sheba AI to Deal Desk records: clients, projects, contracts, and payments.",
  "Add agent actions that produce drafts first, then wait for your approval.",
  "Add voice input for common commands after the agent actions are stable.",
  "Connect real tools: DocuSeal, payment provider, storage, and logs through secure backend routes.",
];

const AdminAI = () => {
  return (
    <AdminShell>
      <section className="relative overflow-hidden bg-background py-16">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="mb-8">
            <Button variant="ghost" asChild className="px-0 text-muted-foreground hover:text-foreground">
              <Link to="/admin" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Admin
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Sheba AI operator layer
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                AI Agents For <span className="text-primary">Your Work</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Sheba AI should become your command center for clients, deals, contracts, payment links, project delivery, media, and voice commands.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/admin/deals">
                    Open Deal Desk
                    <CreditCard className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="http://127.0.0.1:7000" target="_blank" rel="noopener noreferrer">
                    Open Local AI
                    <Bot className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Connection Status</h2>
                  <p className="text-sm text-muted-foreground">The UI is ready. Real tools connect through secure backend routes.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {connectionItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-lg border border-border/60 bg-secondary/20 p-4">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-background/50 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{item.status}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="section-container space-y-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {launchers.map((launcher) => {
              const Icon = launcher.icon;
              return (
                <div key={launcher.title} className="glass-card flex flex-col p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow-sm">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{launcher.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{launcher.description}</p>
                  <div className="mt-5 rounded-lg border border-border/60 bg-background/40 p-3 text-xs leading-5 text-muted-foreground">
                    {launcher.prompt}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Settings2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Build Path</h2>
                  <p className="text-sm text-muted-foreground">How Sheba AI becomes useful instead of generic.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                {buildPath.map((item, index) => (
                  <p key={item}>{index + 1}. {item}</p>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Command Examples</h2>
                  <p className="text-sm text-muted-foreground">The voice and chat behavior we should aim for.</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  "Create a payment-link message for this deal",
                  "Draft a DocuSeal contract from these notes",
                  "Summarize this client and tell me the next action",
                  "Write a short WhatsApp follow-up",
                  "Break this project into delivery tasks",
                  "Prepare a launch post for this service",
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-border/60 bg-secondary/20 p-4 text-sm leading-6 text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Operating Rule</h2>
                <p className="text-sm text-muted-foreground">Powerful, but still controlled by you.</p>
              </div>
            </div>
            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              Sheba AI should draft contracts, payment messages, follow-ups, tasks, and voice-command actions, but it should not send money requests, send contracts, or message clients until you approve the final action.
            </p>
          </div>
        </div>
      </section>
    </AdminShell>
  );
};

export default AdminAI;
