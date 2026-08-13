import { motion } from "motion/react";
import { Briefcase, Calendar, Star, ChevronRight, MapPin } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-transparent relative">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50">
            <Briefcase className="w-3.5 h-3.5 text-brand-accent" />
            <span>Career Milestones</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-text-primary dark:text-white mt-4 max-w-lg">
            My Professional Timeline
          </h2>
          <div className="w-12 h-1 bg-brand-accent rounded mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12 pl-4 sm:pl-8 lg:pl-16">
          
          {/* Vertical Gutter Line with Gradient Glow */}
          <div className="absolute left-4 sm:left-8 lg:left-16 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-accent via-stone-200 to-transparent dark:via-stone-800" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16">
            {EXPERIENCE_DATA.map((item, index) => {
              const hasContent =
                (item.details && item.details.length > 0) ||
                (item.achievements && item.achievements.length > 0) ||
                (item.techUsed && item.techUsed.length > 0);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative pl-8 sm:pl-12 group"
                  id={`timeline-item-${item.id}`}
                >
                  {/* Connector Pulsing Node */}
                  <span className="absolute left-[-11px] top-1.5 w-[22px] h-[22px] rounded-full bg-white dark:bg-stone-950 border-4 border-brand-accent flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50 animate-ping absolute" />
                  </span>

                  {/* Main Card Container */}
                  <div className="bg-white dark:bg-stone-950 rounded-2xl border border-brand-border dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 relative">
                    
                    {/* Card Header */}
                    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${hasContent ? "border-b border-stone-100 dark:border-stone-900 pb-5 mb-5" : ""}`}>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">{item.logo}</span>
                          <h3 className="font-display font-bold text-lg sm:text-xl text-stone-900 dark:text-white group-hover:text-brand-accent transition-colors">
                            {item.role}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <p className="font-sans text-sm text-stone-600 dark:text-stone-300 font-semibold">
                            {item.company}
                          </p>
                          {item.location && (
                            <span className="inline-flex items-center gap-1 font-sans text-xs text-stone-500 dark:text-stone-400">
                              <span className="text-stone-300 dark:text-stone-700">•</span>
                              <MapPin className="w-3 h-3 text-brand-accent shrink-0" />
                              <span>{item.location}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Badge For Duration */}
                      <div className="inline-flex items-center gap-1.5 self-start md:self-auto bg-stone-100 dark:bg-stone-900 px-3.5 py-1.5 rounded-xl border border-stone-200/40 dark:border-stone-800 text-xs font-mono font-semibold text-stone-600 dark:text-stone-300">
                        <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Duties & Responsibilities List */}
                    {item.details && item.details.length > 0 && (
                      <div className="space-y-3.5">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-stone-600 dark:text-stone-400">
                            <ChevronRight className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                            <p className="font-sans text-xs sm:text-sm leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights/Achievements Sub-Block */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mt-6 bg-orange-50/45 dark:bg-stone-900/30 rounded-xl p-4 border border-brand-accent/10">
                        <div className="flex items-center gap-1.5 text-brand-accent font-semibold text-xs mb-2 uppercase tracking-wide">
                          <Star className="w-3.5 h-3.5 fill-brand-accent" />
                          <span>Core Accomplishments</span>
                        </div>
                        <ul className="space-y-1.5">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="font-mono text-[11px] sm:text-[12px] text-stone-700 dark:text-stone-300 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Used Badges */}
                    {item.techUsed && item.techUsed.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {item.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] uppercase font-bold tracking-wider bg-stone-150/50 dark:bg-stone-900 text-stone-500 dark:text-stone-400 border border-stone-200/30 dark:border-stone-800/80 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
