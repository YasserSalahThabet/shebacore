import { Link } from "react-router-dom";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

const CALENDAR_URL = "https://cal.com/shebacore/discovery-call-shebacore";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Capabilities", href: "/solutions" },
    { name: "Technology Ecosystem", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ],
  capabilities: [
    { name: "AI & Automation", href: "/solutions#ai" },
    { name: "Cybersecurity", href: "/solutions#cybersecurity" },
    { name: "Cloud & Managed IT", href: "/solutions#cloud" },
    { name: "Insights & Reporting", href: "/solutions#insights" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="relative h-8 w-8">
                <img
                  src="/logo-hexagon.png?v=2"
                  alt="ShebaCore hexagon logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                Sheba<span className="text-primary">Core</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI operations, workflow automation, and vendor-neutral technology enablement for businesses that want less complexity and stronger systems.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Capabilities</h4>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@shebacore.com" className="transition-colors hover:text-primary">
                  info@shebacore.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+966533588388" className="transition-colors hover:text-primary">
                    +966 53 358 8388
                  </a>
                  <span className="text-xs text-muted-foreground/70">KSA calls</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+17603634466" className="transition-colors hover:text-primary">
                    +1 (760) 363-4466
                  </a>
                  <span className="text-xs text-muted-foreground/70">US / WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <span>US based</span>
                  <span className="text-xs text-muted-foreground/70">
                    Serving KSA and the Middle East
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar size={16} className="text-primary" />
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Book a strategy call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-5 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShebaCore. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
