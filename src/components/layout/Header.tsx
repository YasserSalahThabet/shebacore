import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const navigation = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Solutions",
  href: "/solutions"
}, {
  name: "Cryptonite",
  <a href="/cryptonite/">Cryptonite</a>
}, {
  name: "Partners",
  href: "/partners"
}, {
  name: "Contact",
  href: "/contact"
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <nav className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 relative group-hover:scale-105 transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="ShebaCore Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_8px_hsl(0_84%_60%/0.4)]"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              Sheba<span className="text-destructive">Core</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors animated-underline ${location.pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-base font-medium py-2 transition-colors ${location.pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
}
