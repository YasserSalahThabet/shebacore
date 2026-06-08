import { FormEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasError = searchParams.get("error") === "1";
  const next = searchParams.get("next") || "/admin";

  const handleSubmit = (_event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-gradient-to-l from-primary/10 via-transparent to-transparent lg:block" />

      <section className="section-container relative z-10 flex min-h-screen items-center py-10">
        <div className="grid w-full gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="hidden lg:block">
            <Link to="/" className="mb-12 inline-flex items-center gap-3 group">
              <img
                src="/logo-hexagon.png?v=2"
                alt="ShebaCore"
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="text-xl font-bold leading-tight">
                  Sheba<span className="text-primary">Core</span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Admin Access
                </div>
              </div>
            </Link>

            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Private console
              </div>
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                Command center for the work behind ShebaCore.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
                Partners, project lines, Sheba AI, media planning, and operational notes stay behind one clean protected door.
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:mr-0">
            <div className="glass-card relative overflow-hidden p-6 shadow-lg md:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

              <div className="mb-8 flex items-center justify-between gap-4">
                <Link to="/" className="flex items-center gap-3 lg:hidden">
                  <img src="/logo-hexagon.png?v=2" alt="ShebaCore" className="h-8 w-8 object-contain" />
                  <div className="font-bold">
                    Sheba<span className="text-primary">Core</span>
                  </div>
                </Link>
                <div className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <LockKeyhole className="h-5 w-5" />
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">Admin login</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Sign in to manage the private ShebaCore workspace.
                </p>
              </div>

              {hasError && (
                <div className="mb-5 rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
                  The username or password was not accepted. Please try again.
                </div>
              )}

              <form method="post" action="/admin-login" className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="next" value={next} />
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="h-12 border-border/80 bg-background/60"
                    placeholder="Enter admin username"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-12 border-border/80 bg-background/60"
                    placeholder="Enter admin password"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Checking access" : "Enter Admin"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/20 p-4 text-xs leading-5 text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Access is checked server-side. Your session is stored as a secure HTTP-only cookie.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;
