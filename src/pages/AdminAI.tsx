import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Code2,
  FileText,
  Image,
  Lock,
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
    title: "Coding Agent",
    description: "Inspect projects, plan fixes, prepare patches, and keep implementation notes clear.",
    icon: Code2,
    prompt: "Act as my coding agent and ask what repository, bug, or feature I want to work on.",
  },
  {
    title: "Research Agent",
    description: "Turn business questions into concise findings, tradeoffs, and recommendations.",
    icon: Search,
    prompt: "Act as my research agent and ask what decision I am trying to make.",
  },
  {
    title: "Documents Agent",
    description: "Draft reports, proposals, emails, spreadsheets, and deck outlines.",
    icon: FileText,
    prompt: "Act as my documents agent and ask what document I need to create.",
  },
  {
    title: "Media Planner",
    description: "Prepare image, video, and campaign prompts before media tools are connected.",
    icon: Image,
    prompt: "Act as my media planning agent and ask what visual asset I want to create.",
  },
];

const connectionItems = [
  { label: "Local Sheba AI", status: "Not connected", icon: Server },
  { label: "MCP Tools", status: "Planned", icon: PlugZap },
  { label: "Ollama Models", status: "Planned", icon: Network },
  { label: "Admin Auth", status: "Required", icon: Lock },
];

const AdminAI = () => {
  return (
    <Layout>
      <section className="pt-32 pb-10 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="section-container relative z-10">
          <div className="mb-8">
            <Button variant="ghost" asChild className="px-0 text-muted-foreground hover:text-foreground">
              <Link to="/admin">Back to Admin</Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Sheba AI
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                AI Console <span className="text-primary">Preview</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                A safe frontend shell for the Sheba AI workspace. The real AI backend can be connected later through protected APIs, not public frontend secrets.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <a href="http://127.0.0.1:7000" target="_blank" rel="noopener noreferrer">
                    Open Local AI
                    <Bot className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/admin">Admin Dashboard</Link>
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
                  <p className="text-sm text-muted-foreground">Safe mode until backend auth is ready.</p>
                </div>
              </div>
              <div className="space-y-3">
                {connectionItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-secondary/20 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/50 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                      <span className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                        {item.status}
                      </span>
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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                  <h2 className="text-xl font-semibold text-foreground">What This Needs Next</h2>
                  <p className="text-sm text-muted-foreground">Before public AI controls go live.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>1. Choose the real admin authentication method.</p>
                <p>2. Decide whether Sheba AI stays local, moves to a VPS, or uses hosted APIs.</p>
                <p>3. Add backend routes that keep tokens and MCP keys server-side only.</p>
                <p>4. Connect status checks, logs, and launch buttons after the secure backend exists.</p>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Sheba AI Placement</h2>
                  <p className="text-sm text-muted-foreground">How your local build fits into the website.</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  "Frontend console lives at /admin/ai",
                  "Local AI can open from 127.0.0.1 while developing",
                  "Production AI should use protected server APIs",
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-border/60 bg-secondary/20 p-4 text-sm leading-6 text-muted-foreground">
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

export default AdminAI;
