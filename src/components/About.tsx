import { motion } from "motion/react";
import { User, Terminal, Cpu, HardDrive, Target, NotebookTabs } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: <Terminal className="w-5 h-5 text-brand-accent" /> },
    { label: "Completed Projects", value: "4+", icon: <NotebookTabs className="w-5 h-5 text-brand-accent" /> },
    { label: "Scalable Systems", value: "3+", icon: <HardDrive className="w-5 h-5 text-brand-accent" /> },
    { label: "AI & Backend", value: "Expert", icon: <Cpu className="w-5 h-5 text-brand-accent" /> },
  ];

  return (
    <section id="about" className="py-24 px-4 overflow-hidden bg-white/40 dark:bg-stone-900/10">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50">
            <User className="w-3.5 h-3.5 text-brand-accent" />
            <span>Profile Summary</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-text-primary dark:text-white mt-4 max-w-lg">
            Engineering scalable code with AI-powered focus.
          </h2>
          <div className="w-12 h-1 bg-brand-accent rounded mt-4" />
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Modern Hand-Rendered SVG/CSS Workspace Illustration */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl border border-brand-border dark:border-stone-800 bg-white dark:bg-stone-950 p-6 shadow-xl relative overflow-hidden group select-none">
              
              {/* Card visual elements */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="font-mono text-[10px] text-stone-400 dark:text-stone-500 absolute top-2 right-4">
                workspace.json
              </div>

              {/* Vector Coder Rig Illustration */}
              <div className="mt-8 flex flex-col items-center justify-center py-6">
                <svg viewBox="0 0 200 160" className="w-full max-w-[240px] h-auto text-brand-text-primary dark:text-stone-300" fill="none">
                  {/* Coder Desk Table */}
                  <rect x="10" y="130" width="180" height="4" rx="2" fill="currentColor" className="text-stone-300 dark:text-stone-700" />
                  <line x1="30" y1="134" x2="20" y2="155" stroke="currentColor" strokeWidth="3" className="text-stone-300 dark:text-stone-700" />
                  <line x1="170" y1="134" x2="180" y2="155" stroke="currentColor" strokeWidth="3" className="text-stone-300 dark:text-stone-700" />

                  {/* Main Desktop Display Screen */}
                  <rect x="35" y="30" width="130" height="80" rx="6" fill="currentColor" stroke="currentColor" strokeWidth="3" className="fill-stone-100 dark:fill-stone-900 text-stone-200 dark:text-stone-800" />
                  <rect x="80" y="110" width="40" height="20" fill="currentColor" className="text-stone-300 dark:text-stone-700" />
                  <polygon points="70,130 130,130 115,125 85,125" fill="currentColor" className="text-stone-400 dark:text-stone-800" />

                  {/* Code blocks inside screen */}
                  <rect x="45" y="40" width="40" height="6" rx="2" fill="#FF6B35" />
                  <rect x="45" y="52" width="65" height="4" rx="2" fill="currentColor" className="text-stone-300 dark:text-stone-700" />
                  <rect x="45" y="60" width="80" height="4" rx="2" fill="currentColor" className="text-stone-300 dark:text-stone-700" />
                  <rect x="55" y="68" width="50" height="4" rx="2" fill="currentColor" className="text-stone-400 dark:text-stone-600" />
                  <circle cx="145" cy="50" r="10" fill="currentColor" className="text-stone-200 dark:text-stone-800" />
                  <circle cx="145" cy="50" r="4" fill="#FF6B35" className="animate-pulse" />

                  {/* Keyboard on Desk */}
                  <rect x="75" y="122" width="50" height="4" rx="1" fill="currentColor" className="text-stone-400 dark:text-stone-700" />
                  
                  {/* Small Coffee Cup */}
                  <rect x="140" y="115" width="12" height="15" rx="2" fill="currentColor" className="text-orange-100 dark:text-stone-850" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M152,118 Q156,120 152,123" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Steam */}
                  <path d="M143,108 Q145,104 143,110" stroke="currentColor" strokeWidth="1" className="animate-pulse text-stone-400" />

                  {/* Keyboard light glowing underneath desktop screen */}
                  <ellipse cx="100" cy="110" rx="35" ry="4" fill="#FF6B35" opacity="0.15" />
                </svg>

                {/* Status Indicator Bar */}
                <div className="w-full mt-4 bg-stone-50 dark:bg-stone-900 border border-brand-border dark:border-stone-850/80 rounded-xl p-3 flex items-center justify-between text-xs font-mono text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-[bounce_1.5s_infinite]" />
                    <span className="text-stone-700 dark:text-stone-300">Available for projects</span>
                  </div>
                  <span className="text-brand-accent">nyc, utc-5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Description and Stats Matrix representation */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-brand-accent">
              <Target className="w-5 h-5" />
              <span className="font-display font-bold tracking-wider uppercase text-xs">Who I Am</span>
            </div>
            
            <h3 className="font-display font-semibold text-2xl text-stone-800 dark:text-stone-100">
              Building the future of automation, today.
            </h3>

            <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base">
              I am {PERSONAL_INFO.name}, a passionate creator focused on building high-grade generative AI interfaces, complex enterprise knowledge retrievals (RAG), and bulletproof backend configurations. With more than 3+ years of target tech development, I align product priorities with pristine user layouts.
            </p>

            <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base">
              My core mission revolves around modern software craftsmanship: keeping system interactions low-latency, modularizing architectures to eliminate tech debt, and integrating modern context gateways (like MCP schema protocols) to securely adapt artificial intelligence systems inside reliable frameworks.
            </p>

            {/* Statistics Bento Bento Card Matrix */}
            <div className="grid grid-cols-2 gap-4 mt-4" id="about-stats-container">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-stone-950 border border-brand-border dark:border-stone-800 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-stone-900/60 transition-transform group-hover:scale-105">
                      {stat.icon}
                    </div>
                    <span className="font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-stone-100">
                      {stat.value}
                    </span>
                  </div>
                  <p className="mt-3 font-sans text-xs font-medium text-stone-500 dark:text-stone-400 group-hover:text-brand-accent transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
