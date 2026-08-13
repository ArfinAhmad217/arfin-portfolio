import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { downloadResumePDF } from "../utils/generateResumePDF";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50 px-4 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="glass-panel w-full py-3 px-5 rounded-2xl flex items-center justify-between shadow-lg transition-all duration-300">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 focus:outline-none group"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-white font-display font-bold shadow-md transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold tracking-tight text-brand-text-primary dark:text-stone-100 group-hover:text-brand-accent transition-colors">
            Md Arfin Ahmad
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-stone-100/60 dark:bg-stone-800/40 p-1.5 rounded-xl border border-stone-200/40 dark:border-stone-700/30">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none ${
                activeSection === item.id
                  ? "bg-white dark:bg-stone-900 text-brand-accent shadow-sm"
                  : "text-brand-text-secondary dark:text-stone-400 hover:text-brand-text-primary dark:hover:text-stone-100"
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Utility Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume Download Button */}
          <button
            onClick={() => downloadResumePDF()}
            className="flex items-center gap-1.5 bg-[#111111] dark:bg-stone-100 hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] text-white dark:text-[#111111] hover:text-white dark:hover:text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-md focus:outline-none active:scale-95 cursor-pointer"
            id="resume-btn-desktop"
            title="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-brand-accent" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel shadow-xl flex flex-col gap-3 animate-slide-down border border-stone-200/50 dark:border-stone-700/50">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-brand-accent/10 text-brand-accent"
                    : "text-brand-text-secondary dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-brand-text-primary dark:hover:text-stone-100"
                }`}
                id={`nav-link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-px bg-stone-200/70 dark:bg-stone-800" />

          {/* Mobile CTA */}
          <button
            onClick={() => {
              setIsOpen(false);
              downloadResumePDF();
            }}
            className="flex items-center justify-center gap-2 bg-[#111111] dark:bg-stone-100 hover:bg-brand-accent dark:hover:bg-brand-accent text-white dark:text-[#111111] hover:text-white dark:hover:text-white py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer"
            id="resume-btn-mobile"
          >
            <Download className="w-4 h-4 text-brand-accent" />
            <span>Download PDF Resume</span>
          </button>
        </div>
      )}
    </nav>
  );
}
