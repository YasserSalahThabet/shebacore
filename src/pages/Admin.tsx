import { Link } from "react-router-dom";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  CreditCard,
  Database,
  FileText,
  Globe2,
  Image,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const overview = [
  { label: "Site", value: "Live", detail: "Production website is active", icon: Globe2 },
  { label: "Admin", value: "Protected", detail: "Private console is behind auth", icon: ShieldCheck },
  { label: "Deal Desk", value: "New", detail: "Clients, contracts, and payment links", icon: CreditCard },
  { label: "AI", value: "Ready", detail: "Sheba AI can become your operator layer", icon: Bot },
];

const workspaces = [
  {
    title: "Deal Desk",
    description: "Manage clients, projects, contracts to sign, payment links, and follow-up actions.",
    icon: CreditCard,
    href: "/admin/deals",
  },
  {
    title: "Partners Pipeline",
    description: "Keep partner names, project lines, stages, owners, and next actions in one view.",
    icon: Building2,
    href: "/admin#partners",
  },
  {
    title: "Sheba AI Console",
    description: "Launch your agents for sales, contracts, payments, projects, and voice commands.",
    icon: Sparkles,
    href: "/admin/ai",
  },
  {
    title: "Website Content",
    description: "Prepare page updates, offers, case studies, announcements, and content changes.",
    icon: FileText,
  },
  {
    title: "Media Pipeline",
    description: "Plan image, video, campaign, and brand assets before connecting generation tools.",
    icon: Image,
  },
  {
    title: "Data and Integrations",
    description: "Track future CRM, DocuSeal, payment providers, MCP, automation, and backend connections.",
    icon: Database,
  },
];

const partnerProjects = [
  {
    partner: "Strategic Partners",
    type: "Partner list",
    projectLine: "Build the core partner shortlist and relationship notes.",
    stage: "Building",
    owner: "Yaz",
    nextStep: "Add confirmed partner names and contacts.",
  },
  {
    partner: "Cloud and Productivity",
    type: "Service line",
    projectLine: "Microsoft 365, cloud hosting, backup, and secure collaboration packages.",
    stage: "Draft",
    owner: "Yaz",
    nextStep: "Choose the first package to publish internally.",
  },
  {
    partner: "Security Stack",
    type: "Service line",
    projectLine: "Firewall, endpoint protection, monitoring, and baseline hardening.",
    stage: "Planning",
    owner: "Yaz",
    nextStep: "Map vendors and pricing notes.",
  },
  {
    partner: "Sheba AI",
    type: "Internal product",
    projectLine: "Admin AI console, agents, voice commands, payment support, and contract support.",
    stage: "Active",
    owner: "Yaz",
    nextStep: "Connect agents to Deal Desk context.",
  },
];

const operationsQueue = [
  "Replace starter Deal Desk records with real clients and projects.",
  "Connect DocuSeal for free contract signing and signed PDF tracking.",
  "Choose Moyasar or PayTabs for real payment-link generation.",
  "Connect Sheba AI to client, deal, contract, and payment context.",
];

const guardrails = [
  "No private tokens, payment keys, or signing keys are stored in this frontend.",
  "Contracts and payment links should be created by secure server routes only.",
  "Sheba AI should draft actions first and wait for your approval before sending anything.",
];

const Admin = () => {
  return (
    <AdminShell>
      <section className="relative overflow-hidden bg-background py-16">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-12 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Lock className="h-3.5 w-3.5" />
                Private admin
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                ShebaCore <span className="text-primary">Command Center</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                A focused workspace for clients, deals, contracts, payment links, partners, Sheba AI, media work, and operational next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/admin/deals">
                  Open Deal Desk
                  <CreditCard className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/admin/ai">
                  Open AI Console
                  <Bot className="h-4 w-4" />
                </Link>
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
                  {workspace.href && <div className="mt-5 text-sm font-semibold text-primary">Open workspace</div>}
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

          <div id="partners" className="glass-card scroll-mt-28 p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Briefcase className="h-4 w-4" />
                  Partners and project lines
                </div>
                <h2 className="text-2xl font-bold text-foreground">Partner Pipeline</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  A starter operating view for partners, service lines, and internal products you want to track from the admin page.
                </p>
              </div>
              <Button variant="hero-outline" asChild>
                <Link to="/admin/deals">Turn into client deal</Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg border border-border/60">
              <div className="grid grid-cols-12 gap-4 border-b border-border/60 bg-secondary/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <div className="col-span-12 md:col-span-3">Partner</div>
                <div className="col-span-12 md:col-span-4">Project line</div>
                <div className="col-span-6 md:col-span-2">Stage</div>
                <div className="col-span-6 md:col-span-1">Owner</div>
                <div className="col-span-12 md:col-span-2">Next step</div>
              </div>
              {partnerProjects.map((item) => (
                <div key={item.partner} className="grid grid-cols-12 gap-4 border-b border-border/40 px-4 py-4 last:border-b-0">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-semibold text-foreground">{item.partner}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{item.type}</div>
                  </div>
                  <div className="col-span-12 text-sm leading-6 text-muted-foreground md:col-span-4">{item.projectLine}</div>
                  <div className="col-span-6 md:col-span-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      <Clock3 className="h-3.5 w-3.5" />
                      {item.stage}
                    </span>
                  </div>
                  <div className="col-span-6 text-sm font-medium text-foreground md:col-span-1">{item.owner}</div>
                  <div className="col-span-12 text-sm leading-6 text-muted-foreground md:col-span-2">{item.nextStep}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Operations Queue</h2>
                  <p className="text-sm text-muted-foreground">The next pieces that make this admin page useful.</p>
                </div>
              </div>
              <div className="space-y-4">
                {operationsQueue.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-lg border border-border/60 bg-secondary/20 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="settings" className="glass-card scroll-mt-28 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Admin Notes</h2>
                  <p className="text-sm text-muted-foreground">Keep the console clean and safe.</p>
                </div>
              </div>
              <div className="space-y-3">
                {guardrails.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-border/60 bg-background/30 p-4 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminShell>
  );
};

export default Admin;
