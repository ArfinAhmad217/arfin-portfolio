import { useState } from "react";
import { Cpu, Terminal, Layers, Star, Info } from "lucide-react";
import { SKILLS_DATA } from "../data";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Group icons based on category
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Terminal className="w-4 h-4 text-brand-accent" />;
      case "frontend":
        return <Layers className="w-4 h-4 text-brand-accent" />;
      case "ai / genai specialist":
        return <Cpu className="w-4 h-4 text-brand-accent" />;
      default:
        return <Star className="w-4 h-4 text-brand-accent" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50">
            <Cpu className="w-3.5 h-3.5 text-brand-accent" />
            <span>Core Diagnostics</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-text-primary dark:text-white mt-4 max-w-lg">
            My Technologies & Frameworks
          </h2>
          <div className="w-12 h-1 bg-brand-accent rounded mt-4" />
        </div>

        {/* Dynamic Skills Bento Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-stone-950 border border-brand-border dark:border-stone-855 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              id={`skill-group-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 border-b border-stone-100 dark:border-stone-900 pb-3 mb-5">
                  <div className="p-2 bg-orange-50 dark:bg-stone-900 rounded-xl">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-display font-bold text-base text-stone-900 dark:text-stone-100">
                    {group.category}
                  </h3>
                </div>

                {/* Pill Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const isGroupHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative cursor-default"
                      >
                        {/* Soft Glow Underlay on Hover */}
                        {isGroupHovered && (
                          <div className="absolute inset-x-0 inset-y-0 rounded-xl bg-brand-accent/20 blur-md scale-105 transition-all duration-300" />
                        )}

                        {/* Interactive Pill */}
                        <div
                          className={`relative border px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-between gap-3 transition-all duration-300 transform select-none ${
                            isGroupHovered
                              ? "bg-[#111111] text-white border-transparent scale-105 rotate-[1.5deg] shadow-md"
                              : "bg-stone-50 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 border-stone-200/50 dark:border-stone-800"
                          }`}
                          id={`skill-pill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <span className="font-sans text-xs">{skill.name}</span>
                          <span
                            className={`font-mono text-[9px] uppercase font-bold tracking-wider rounded-md px-1.5 py-0.5 transition-colors ${
                              isGroupHovered
                                ? "bg-brand-accent text-white"
                                : "bg-stone-150/60 dark:bg-stone-800 text-stone-500 dark:text-stone-400 group-hover:bg-brand-accent"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Minimal category assistance text */}
              <div className="mt-8 flex items-center gap-1 text-[10px] font-mono text-stone-400">
                <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Hover elements to reveal competency levels</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
