import { Link } from "react-router-dom";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  Gauge,
  MessageSquare,
  PenTool,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

type IconType = typeof Activity;

const cockpitStats = [
  {
    label: "Active pipeline",
    value: "SAR 15K",
    detail: "Prototype, support, and assessment opportunities",
    icon: TrendingUp,
    signal: "63%",
  },
  {
    label: "Contract queue",
    value: "2",
    detail: "Phase-one agreements to prepare or send",
    icon: FileText,
    signal: "42%",
  },
  {
    label: "Payment links",
    value: "1",
    detail: "Deposit request waiting for provider connection",
    icon: CreditCard,
    signal: "28%",
  },
  {
    label: "AI operators",
    value: "6",
    detail: "Sales, contract, payment, project, media, voice",
    icon: Bot,
    signal: "76%",
  },
];

const quickActions = [
  {
    title: "Create phase-one contract",
    detail: "Use the prototype agreement flow",
    href: "/admin/deals#contract-template",
    icon: PenTool,
  },
  {
    title: "Prepare payment link",
    detail: "Draft amount, client, and message",
    href: "/admin/deals#payment-links",
    icon: CreditCard,
  },
  {
    title: "Ask Sheba AI",
    detail: "Route work to the right agent",
    href: "/admin/ai",
    icon: Sparkles,
  },
  {
    title: "Review partners",
    detail: "Track project lines and owners",
    href: "/admin#partners",
    icon: Building2,
  },
];

const pipelineStages = [
  { stage: "Lead", count: 4, value: "New conversations", progress: "58%" },
  { stage: "Consulted", count: 2, value: "Needs scope", progress: "44%" },
  { stage: "Contract", count: 2, value: "Phase-one draft", progress: "38%" },
  { stage: "Payment", count: 1, value: "Deposit next", progress: "24%" },
  { stage: "Prototype", count: 1, value: "Ready to plan", progress: "32%" },
];

const commandQueue = [
  {
    label: "Contract",
    task: "Turn consultation notes into a phase-one agreement draft.",
    owner: "Contract Agent",
    status: "Ready",
    icon: FileText,
  },
  {
    label: "Payment",
    task: "Prepare a client-safe deposit message before provider API connection.",
    owner: "Payment Agent",
    status: "Draft",
    icon: CreditCard,
  },
  {
    label: "Follow-up",
    task: "Write a short WhatsApp follow-up for a consulted prospect.",
    owner: "Sales Agent",
    status: "Ready",
    icon: MessageSquare,
  },
  {
    label: "Delivery",
    task: "Break a prototype into milestones, owner, and next action.",
    owner: "Project Agent",
    status: "Next",
    icon: Briefcase,
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

const buildReadiness = [
  { label: "Admin auth", value: "Protected", icon: ShieldCheck },
  { label: "Deal Desk", value: "UI ready", icon: Briefcase },
  { label: "DocuSeal", value: "Next", icon: PenTool },
  { label: "Payments", value: "Provider next", icon: CreditCard },
  { label: "AI context", value: "Planned", icon: PlugZap },
];

const GaugeCard = ({ label, value, detail, icon: Icon, signal }: {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
  signal: string;
}) => (
  <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-xl">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <Icon className="h-3.5 w-3.5 text-primary" />
          {label}
        </div>
        <div className="text-3xl font-bold text-foreground">{value}</div>
      </div>
      <div
        className="grid h-16 w-16 shrink-0 place-items-center rounded-full"
        style={{ background: `conic-gradient(hsl(var(--primary)) ${signal}, hsl(var(--secondary)) 0)` }}
      >
        <div className="grid h-11 w-11 place-items-center rounded-full bg-background text-[11px] font-semibold text-primary">
          {signal}
        </div>
      </div>
    </div>
    <p className="mt-4 text-sm leading-6 text-muted-foreground">{detail}</p>
  </div>
);

const Admin = () => {
  return (
    <AdminShell>
      <section className="relative overflow-hidden bg-background py-8 md:py-10">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <div className="section-container relative z-10">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Gauge className="h-3.5 w-3.5" />
                Operator cockpit
              </div>
              <h1 className="text-3xl font-bold text-foreground md:text-5xl">
                ShebaCore <span className="text-primary">Command Dashboard</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                One screen for pipeline, phase-one contracts, payment links, partner lines, and Sheba AI actions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/admin/deals" className="gap-2">
                  Deal Desk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/admin/ai" className="gap-2">
                  Sheba AI
                  <Bot className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1fr_420px]">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-4 shadow-lg backdrop-blur-xl md:p-5">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Activity className="h-4 w-4 text-primary" />
                    Live operating view
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Starter workspace data until the database is connected.</p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  System ready
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {cockpitStats.map((item) => (
                  <GaugeCard key={item.label} {...item} />
                ))}
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-5">
                {pipelineStages.map((item) => (
                  <div key={item.stage} className="rounded-xl border border-border/60 bg-background/35 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-foreground">{item.stage}</span>
                      <span className="text-2xl font-bold text-primary">{item.count}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{item.value}</p>
                    <div className="mt-4 h-1.5 rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: item.progress }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/10 to-card/40 p-5 shadow-glow-sm backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Target className="h-4 w-4 text-primary" />
                    Today focus
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Recommended next actions</p>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-full border border-primary/40 bg-background/70 text-xl font-bold text-primary">
                  04
                </div>
              </div>

              <div className="space-y-3">
                {commandQueue.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.task} className="rounded-xl border border-border/60 bg-background/45 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Icon className="h-4 w-4 text-primary" />
                          {item.label}
                        </div>
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">{item.task}</p>
                      <p className="mt-2 text-xs text-muted-foreground">Owner: {item.owner}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="section-container space-y-6">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-border/60 bg-card/45 p-5 backdrop-blur-xl md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Zap className="h-4 w-4 text-primary" />
                    Quick actions
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Direct paths only. No dead buttons.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={action.title}
                      to={action.href}
                      className="group rounded-xl border border-border/60 bg-background/35 p-4 transition-all duration-300 hover:border-primary/45 hover:bg-primary/5"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-semibold text-foreground">{action.title}</div>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{action.detail}</p>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/45 p-5 backdrop-blur-xl md:p-6">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Sheba AI command deck
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Draft first, approve before sending.</p>
                </div>
                <Button variant="hero-outline" size="sm" asChild>
                  <Link to="/admin/ai">Open AI Console</Link>
                </Button>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  "Draft follow-up after consultation",
                  "Prepare phase-one contract fields",
                  "Write payment-link message",
                  "Summarize client next action",
                  "Break prototype into milestones",
                  "Prepare media prompt",
                ].map((command) => (
                  <div key={command} className="rounded-xl border border-border/60 bg-background/35 p-4 text-sm leading-6 text-muted-foreground">
                    {command}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="partners" className="scroll-mt-28 rounded-2xl border border-border/60 bg-card/45 p-5 backdrop-blur-xl md:p-6">
            <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                  <Building2 className="h-4 w-4" />
                  Partners and project lines
                </div>
                <h2 className="text-2xl font-bold text-foreground">Partner Pipeline</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  A compact operating view for partners, service lines, and internal products.
                </p>
              </div>
              <Button variant="hero-outline" asChild>
                <Link to="/admin/deals">Turn into client deal</Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/60">
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

          <div id="settings" className="grid scroll-mt-28 gap-4 lg:grid-cols-[1fr_1.15fr]">
            <div className="rounded-2xl border border-border/60 bg-card/45 p-5 backdrop-blur-xl md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Readiness</h2>
                  <p className="text-sm text-muted-foreground">What is ready and what connects next.</p>
                </div>
              </div>
              <div className="space-y-3">
                {buildReadiness.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-background/35 p-4">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/45 p-5 backdrop-blur-xl md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Operating rules</h2>
                  <p className="text-sm text-muted-foreground">Keep the console useful and safe.</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  "No fake send buttons until the backend exists.",
                  "No payment or signing keys in browser code.",
                  "Sheba AI drafts actions and waits for approval.",
                ].map((rule) => (
                  <div key={rule} className="rounded-xl border border-border/60 bg-background/35 p-4 text-sm leading-6 text-muted-foreground">
                    {rule}
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
