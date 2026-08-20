import { Terminal, FileText, Download } from "lucide-react";
import { downloadResumePDF } from "../utils/generateResumePDF";

interface FooterProps {
  onOpenResume?: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-stone-200/50 dark:border-stone-850 bg-stone-50/50 dark:bg-stone-950/20 select-none">
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Brand identity */}
        <div className="flex items-center gap-1.5 text-stone-500">
          <Terminal className="w-4 h-4 text-brand-accent" />
          <span className="font-mono text-xs font-semibold tracking-wide">
            © {currentYear} MD ARFIN AHMAD. All rights reserved.
          </span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          )}
          <button
            onClick={() => downloadResumePDF()}
            className="flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-brand-accent" />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
