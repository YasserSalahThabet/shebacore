import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "17603634466";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20ShebaCore%2C%20I'd%20like%20to%20learn%20more%20about%20your%20services.`;

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <div
        className={`flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
          isHovered ? "px-4 py-3" : "p-3"
        }`}
      >
        <MessageCircle size={20} className="shrink-0" />
        <span
          className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isHovered ? "max-w-32 opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          Chat with us
        </span>
      </div>
    </a>
  );
}
