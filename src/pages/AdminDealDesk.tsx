import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Bot,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  Eye,
  FileText,
  FileUp,
  Lock,
  MessageSquare,
  Mic,
  PenTool,
  Save,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
  Users,
} from "lucide-react";

type IconType = typeof Save;

const metrics = [
  { label: "Clients", value: "4", detail: "Starter records to replace with real clients", icon: Users },
  { label: "Deals", value: "6", detail: "Projects, retainers, and one-off work", icon: Briefcase },
  { label: "Contract", value: "Prototype", detail: "Post-consultation agreement template", icon: FileText },
  { label: "Payments", value: "Draft", detail: "Ready for Moyasar or PayTabs later", icon: CreditCard },
];

const deals = [
  {
    client: "New website client",
    project: "Website refresh and Sheba AI setup",
    value: "SAR 8,500",
    contract: "Prototype agreement",
    payment: "Payment link needed",
    next: "Set client name and dates",
  },
  {
    client: "Managed IT lead",
    project: "Monthly support retainer",
    value: "SAR 2,500/mo",
    contract: "Template if needed",
    payment: "Recurring plan later",
    next: "Confirm if prototype stage applies",
  },
  {
    client: "Security assessment",
    project: "Firewall and endpoint baseline",
    value: "SAR 4,000",
    contract: "Ready to prepare",
    payment: "50% deposit draft",
    next: "Add project dates and signer",
  },
  {
    client: "AI automation prospect",
    project: "Admin workflow and agents",
    value: "TBD",
    contract: "After consultation",
    payment: "No link yet",
    next: "Turn consultation notes into scope",
  },
];

const changingFields = [
  { label: "Client / company", detail: "Who the prototype agreement is for", icon: UserRound },
  { label: "Project / prototype", detail: "Name of the work to prototype", icon: Briefcase },
  { label: "Consultation date", detail: "The first discussion before the prototype", icon: CalendarDays },
  { label: "Agreement date", detail: "The date the contract is issued", icon: CalendarDays },
  { label: "Prototype start date", detail: "When work is expected to begin", icon: Clock3 },
  { label: "Signer details", detail: "Client signer and ShebaCore signer", icon: PenTool },
];

const contractFlow = [
  "Upload or select the ShebaCore prototype agreement PDF template.",
  "Change only the client, project, consultation date, agreement date, and start date.",
  "Generate a clean preview PDF before sending.",
  "Send the final agreement through DocuSeal and track signed status.",
];

const paymentSteps = [
  "Current: plan payment-link workflow and message structure.",
  "Next: choose Moyasar or PayTabs as the payment provider.",
  "Next: generate provider payment links from a secure backend.",
  "Next: send by WhatsApp or email and track paid/overdue.",
];

const agents = [
  {
    name: "Sales Agent",
    command: "Draft a WhatsApp follow-up after the first consultation.",
    icon: MessageSquare,
  },
  {
    name: "Contract Agent",
    command: "Fill the prototype agreement fields from client and consultation notes.",
    icon: PenTool,
  },
  {
    name: "Payment Agent",
    command: "Prepare a deposit payment-link message after the agreement is ready.",
    icon: CreditCard,
  },
  {
    name: "Project Agent",
    command: "Turn the agreed prototype into delivery steps and next actions.",
    icon: Briefcase,
  },
  {
    name: "Voice Command",
    command: "Create agreement for this client, set dates, prepare signing link.",
    icon: Mic,
  },
  {
    name: "Command Agent",
    command: "Choose the right agent and prepare the safest next action for approval.",
    icon: Bot,
  },
];

const nextBuild = [
  "Store the default ShebaCore prototype agreement PDF securely.",
  "Add editable client/date fields for the agreement.",
  "Generate a contract preview PDF from the saved template and field values.",
  "Connect DocuSeal for sending and signed PDF tracking.",
  "Connect Sheba AI so it can fill the agreement from consultation notes.",
];

const ComingNextButton = ({ icon: Icon, label }: { icon: IconType; label: string }) => (
  <Button variant="hero-outline" className="gap-2 opacity-60" disabled>
    <Icon className="h-4 w-4" />
    {label}
  </Button>
);

const AdminDealDesk = () => {
  const [selectedLetterhead, setSelectedLetterhead] = useState(
    "ShebaCore_Letterhead_Template.pdf - current prototype agreement reference"
  );

  return (
    <AdminShell>
      <section className="relative overflow-hidden bg-background py-16">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="section-container relative z-10">
          <div className="mb-8">
            <Button variant="ghost" asChild className="px-0 text-muted-foreground hover:text-foreground">
              <Link to="/admin" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Admin
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Lock className="h-3.5 w-3.5" />
                Deal desk
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Prototype agreements, clients, and <span className="text-primary">payment links</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                A private workspace for turning a first consultation into a signed prototype agreement, then a payment request and delivery plan.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Working now</h2>
                  <p className="text-sm text-muted-foreground">You can select the agreement PDF and confirm the fields that change per client.</p>
                </div>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/20 p-4 text-sm leading-6 text-muted-foreground">
                The real save, preview, and DocuSeal buttons are marked as coming next until secure storage and PDF generation are connected.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="section-container space-y-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => {
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

          <div id="contract-template" className="glass-card scroll-mt-28 p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <FileUp className="h-4 w-4" />
                  Prototype agreement template
                </div>
                <h2 className="text-2xl font-bold text-foreground">ShebaCore Post-Consultation Contract</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  This is the agreement you use after the first consultation and before prototype work starts. The goal is to reuse the same template and only update the client, project, and dates.
                </p>
              </div>
              <Button variant="hero" asChild>
                <Link to="/admin/ai">Ask Contract Agent</Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-border/60 bg-secondary/20 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Agreement PDF</h3>
                    <p className="text-xs text-muted-foreground">Default template reference</p>
                  </div>
                </div>

                <label
                  htmlFor="letterhead-upload"
                  className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary/40 bg-background/40 p-6 text-center transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <FileUp className="mb-3 h-8 w-8 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Choose prototype agreement PDF</span>
                  <span className="mt-2 text-xs leading-5 text-muted-foreground">
                    Browser-only for now. It will stay saved once secure file storage is connected.
                  </span>
                </label>
                <input
                  id="letterhead-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="sr-only"
                  onChange={(event) => {
                    setSelectedLetterhead(event.target.files?.[0]?.name ?? "No template selected");
                  }}
                />

                <div className="mt-4 rounded-lg border border-border/60 bg-background/40 p-3 text-sm text-muted-foreground">
                  {selectedLetterhead}
                </div>
              </div>

              <div className="rounded-lg border border-border/60 bg-secondary/20 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Fields to change each time</h3>
                    <p className="text-xs text-muted-foreground">The repeat workflow for each new client</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {changingFields.map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.label} className="rounded-lg border border-border/60 bg-background/40 p-3">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Icon className="h-4 w-4 text-primary" />
                          {field.label}
                        </div>
                        <p className="text-xs leading-5 text-muted-foreground">{field.detail}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ComingNextButton icon={Save} label="Save next" />
                  <ComingNextButton icon={Eye} label="Preview next" />
                  <ComingNextButton icon={Send} label="DocuSeal next" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Briefcase className="h-4 w-4" />
                  Active deal pipeline
                </div>
                <h2 className="text-2xl font-bold text-foreground">Work To Close</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Starter records for the deal flow. Later these become real client records stored in a database.
                </p>
              </div>
              <Button variant="hero-outline" asChild>
                <Link to="/admin/ai">Ask Sheba AI for next actions</Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg border border-border/60">
              <div className="grid grid-cols-12 gap-4 border-b border-border/60 bg-secondary/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <div className="col-span-12 md:col-span-2">Client</div>
                <div className="col-span-12 md:col-span-3">Project</div>
                <div className="col-span-6 md:col-span-1">Value</div>
                <div className="col-span-6 md:col-span-2">Contract</div>
                <div className="col-span-6 md:col-span-2">Payment</div>
                <div className="col-span-12 md:col-span-2">Next action</div>
              </div>
              {deals.map((deal) => (
                <div key={deal.client} className="grid grid-cols-12 gap-4 border-b border-border/40 px-4 py-4 last:border-b-0">
                  <div className="col-span-12 font-semibold text-foreground md:col-span-2">{deal.client}</div>
                  <div className="col-span-12 text-sm leading-6 text-muted-foreground md:col-span-3">{deal.project}</div>
                  <div className="col-span-6 text-sm font-semibold text-foreground md:col-span-1">{deal.value}</div>
                  <div className="col-span-6 md:col-span-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      {deal.contract}
                    </span>
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
                      <CreditCard className="h-3.5 w-3.5 text-primary" />
                      {deal.payment}
                    </span>
                  </div>
                  <div className="col-span-12 text-sm leading-6 text-muted-foreground md:col-span-2">{deal.next}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div id="contracts" className="glass-card scroll-mt-28 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Contract Workflow</h2>
                  <p className="text-sm text-muted-foreground">Simple repeat process for the prototype agreement.</p>
                </div>
              </div>
              <div className="space-y-3">
                {contractFlow.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-lg border border-border/60 bg-secondary/20 p-4 text-sm leading-6 text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div id="payment-links" className="glass-card scroll-mt-28 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Payment Link Desk</h2>
                  <p className="text-sm text-muted-foreground">Provider connection comes after the workflow is approved.</p>
                </div>
              </div>
              <div className="space-y-3">
                {paymentSteps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-lg border border-border/60 bg-secondary/20 p-4 text-sm leading-6 text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Sparkles className="h-4 w-4" />
                  Sheba AI deal agents
                </div>
                <h2 className="text-2xl font-bold text-foreground">Your AI Operator Layer</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  These are the agents Sheba AI should become for your actual workflow. Every action should draft first, then wait for your approval.
                </p>
              </div>
              <Button variant="hero" asChild>
                <Link to="/admin/ai">Open AI Console</Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {agents.map((agent) => {
                const Icon = agent.icon;
                return (
                  <div key={agent.name} className="rounded-lg border border-border/60 bg-secondary/20 p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{agent.name}</h3>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{agent.command}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Next Build Queue</h2>
                  <p className="text-sm text-muted-foreground">The order that keeps this useful and safe.</p>
                </div>
              </div>
              <div className="space-y-3">
                {nextBuild.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-border/60 bg-background/30 p-4 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
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
                  <h2 className="text-xl font-semibold text-foreground">Rules For Real Money</h2>
                  <p className="text-sm text-muted-foreground">Important before connecting APIs.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>No payment or DocuSeal keys in browser code.</p>
                <p>Contracts and payments should be created by secure server routes only.</p>
                <p>Sheba AI should draft messages and actions, then wait for your approval before anything is sent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminShell>
  );
};

export default AdminDealDesk;
