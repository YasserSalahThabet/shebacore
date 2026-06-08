import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bot,
  Briefcase,
  ExternalLink,
  LayoutDashboard,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AdminShellProps {
  children: ReactNode;
}

const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "AI Console", href: "/admin/ai", icon: Bot },
  { label: "Partners", href: "/admin#partners", icon: Briefcase },
  { label: "Settings", href: "/admin#settings", icon: Settings },
];

export function AdminShell({ children }: AdminShellProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="section-container">
          <div className="flex min-h-20 flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <Link to="/admin" className="flex items-center gap-3 group">
              <img
                src="/logo-hexagon.png?v=2"
                alt="ShebaCore"
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="text-lg font-bold leading-tight text-foreground">
                  Sheba<span className="text-primary">Core</span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Admin Console
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {adminLinks.map((item) => {
                const Icon = item.icon;
                const isHashLink = item.href.includes("#");
                const isActive = isHashLink
                  ? `${location.pathname}${location.hash}` === item.href
                  : location.pathname === item.href;

                return (
                  <Button
                    key={item.label}
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    asChild
                    className={cn(
                      "gap-2",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Link to={item.href}>
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}

              <Button variant="hero-outline" size="sm" asChild>
                <Link to="/" className="gap-2">
                  Public Site
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/60 bg-background/80">
        <div className="section-container flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Private ShebaCore admin workspace</span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Protected area
          </span>
        </div>
      </footer>
    </div>
  );
}
