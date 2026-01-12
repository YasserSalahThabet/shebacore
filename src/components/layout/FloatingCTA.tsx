import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px (past hero section)
      const scrollThreshold = 500;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://cal.com/shebacore/discovery-call-shebacore"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        variant="hero"
        size="lg"
        className="gap-2 shadow-lg hover:shadow-xl"
      >
        <Calendar size={18} />
        <span className="hidden sm:inline">Schedule a Call</span>
        <span className="sm:hidden">Book Call</span>
      </Button>
    </a>
  );
}
