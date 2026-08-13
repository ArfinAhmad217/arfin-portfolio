import { Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-stone-200/50 dark:border-stone-850 bg-stone-50/50 dark:bg-stone-950/20 select-none">
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Brand identity */}
        <div className="flex items-center gap-1.5 text-stone-500">
          <Terminal className="w-4 h-4 text-brand-accent" />
          <span className="font-mono text-xs font-semibold tracking-wide">
            © {currentYear} Md Arfin Ahmad. All rights reserved.
          </span>
        </div>

        {/* Builder credentials */}
        <div className="font-mono text-xs text-stone-600 dark:text-stone-300 font-medium">
          Designed and built by Md Arfin Ahmad - Software Engineer
        </div>

      </div>
    </footer>
  );
}
