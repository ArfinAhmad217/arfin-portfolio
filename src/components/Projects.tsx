import { useState, MouseEvent, useEffect } from "react";
import { FolderGit2, Link2, Github, HelpCircle, ArrowUpRight, Wrench, Maximize2, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { Project, ProjectScreenshot } from "../types";

export default function Projects() {
  const [activeLightbox, setActiveLightbox] = useState<{
    projectTitle: string;
    screenshots: ProjectScreenshot[];
    currentIndex: number;
  } | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightbox) return;
      if (e.key === "Escape") {
        setActiveLightbox(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightbox((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.screenshots.length) %
                  prev.screenshots.length,
              }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveLightbox((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.screenshots.length,
              }
            : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightbox]);

  return (
    <section id="projects" className="py-24 px-4 bg-white/30 dark:bg-stone-900/10">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50">
            <FolderGit2 className="w-3.5 h-3.5 text-brand-accent" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-text-primary dark:text-white mt-4 max-w-lg">
            Projects
          </h2>
          <p className="font-sans text-xs md:text-sm text-stone-500 mt-2 max-w-md">
            Click demonstration indicators or examine source stacks below
          </p>
          <div className="w-12 h-1 bg-brand-accent rounded mt-4" />
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(380px,_auto)]">
          {PROJECTS_DATA.map((project) => (
            <BentoCard
              key={project.id}
              project={project}
              onOpenLightbox={(index) => {
                if (project.screenshots && project.screenshots.length > 0) {
                  setActiveLightbox({
                    projectTitle: project.title,
                    screenshots: project.screenshots,
                    currentIndex: index,
                  });
                }
              }}
            />
          ))}
        </div>

        {/* Premium Tools Section */}
        <div className="mt-28" id="premium-tools">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-1.5 bg-orange-50 dark:bg-stone-800/60 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-brand-accent border border-brand-accent/20">
              <Wrench className="w-3.5 h-3.5 text-brand-accent" />
              <span>Developer Workspace</span>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-brand-text-primary dark:text-white mt-3">
              Premium Tools
            </h3>
            <p className="font-sans text-xs md:text-sm text-stone-500 dark:text-stone-400 mt-2 max-w-md">
              Essential development environments, cloud services, databases, and AI tooling powering my daily workflow.
            </p>
            <div className="w-12 h-1 bg-brand-accent rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PREMIUM_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="bg-white dark:bg-stone-950 border border-brand-border dark:border-stone-850/80 rounded-2xl p-4.5 shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all duration-300 flex items-center gap-4 group"
                id={`premium-tool-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {tool.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-brand-accent transition-colors truncate">
                    {tool.name}
                  </h4>
                  <span className={`inline-block font-mono text-[10px] font-semibold border rounded-md px-2 py-0.5 mt-1 w-fit ${tool.badgeBg}`}>
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal for Screenshots */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 transition-all"
          onClick={() => setActiveLightbox(null)}
          id="screenshot-lightbox-modal"
        >
          {/* Header Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white pb-3 mb-2 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10">
                <Images className="w-4 h-4 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white">
                  {activeLightbox.projectTitle}
                </h4>
                <p className="font-sans text-xs text-stone-400">
                  {activeLightbox.screenshots[activeLightbox.currentIndex]?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-stone-400 bg-white/10 px-2.5 py-1 rounded-full">
                {activeLightbox.currentIndex + 1} / {activeLightbox.screenshots.length}
              </span>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-1.5 rounded-full hover:bg-white/20 text-stone-300 hover:text-white transition-colors"
                id="lightbox-close-btn"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center my-auto overflow-hidden rounded-2xl border border-white/15 bg-stone-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightbox.screenshots[activeLightbox.currentIndex]?.url}
              alt={activeLightbox.screenshots[activeLightbox.currentIndex]?.title}
              className="w-full h-auto max-h-[72vh] object-contain select-none"
              referrerPolicy="no-referrer"
            />

            {/* Navigation Arrows */}
            {activeLightbox.screenshots.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex - 1 + prev.screenshots.length) %
                              prev.screenshots.length,
                          }
                        : null
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 shadow-lg transition-all"
                  aria-label="Previous image"
                  id="lightbox-prev-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveLightbox((prev) =>
                      prev
                        ? {
                            ...prev,
                            currentIndex:
                              (prev.currentIndex + 1) % prev.screenshots.length,
                          }
                        : null
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 shadow-lg transition-all"
                  aria-label="Next image"
                  id="lightbox-next-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {activeLightbox.screenshots.length > 1 && (
            <div
              className="flex items-center gap-2 mt-3 overflow-x-auto max-w-full p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {activeLightbox.screenshots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setActiveLightbox((prev) => (prev ? { ...prev, currentIndex: idx } : null))
                  }
                  className={`relative rounded-lg overflow-hidden border-2 transition-all w-16 sm:w-20 h-10 sm:h-12 shrink-0 ${
                    activeLightbox.currentIndex === idx
                      ? "border-brand-accent scale-105 shadow-md shadow-brand-accent/20"
                      : "border-white/20 opacity-50 hover:opacity-90"
                  }`}
                  id={`lightbox-thumb-${idx}`}
                >
                  <img
                    src={shot.url}
                    alt={shot.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

const PREMIUM_TOOLS = [
  {
    name: "Visual Studio Code",
    category: "IDE & Code Editor",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M23.15 2.587l-16.33 15.517-5.11-3.874 18.06-12.87 3.38 1.227zm0 18.826l-16.33-15.517-5.11 3.874 18.06 12.87 3.38-1.227zM23.15 2.587L18.6 1.137l-13.66 10.3 13.66 10.3 4.55-1.45V2.587zM.85 7.037L5.8 11.2 0.85 15.36V7.037z" fill="#007ACC" />
      </svg>
    ),
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#336791"/>
        <path d="M12 6a6 6 0 0 0-6 6c0 1.94.92 3.67 2.36 4.77l.84-.7A4.88 4.88 0 0 1 7.2 12c0-2.65 2.15-4.8 4.8-4.8s4.8 2.15 4.8 4.8c0 1.6-.78 3.01-2 3.87l.84.7A5.96 5.96 0 0 0 18 12a6 6 0 0 0-6-6z" fill="#336791"/>
      </svg>
    ),
    badgeBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20"
  },
  {
    name: "SSMS",
    category: "SQL Server Management",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.477 2 2 3.79 2 6v12c0 2.21 4.477 4 10 4s10-1.79 10-4V6c0-2.21-4.477-4-10-4zm0 2c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3zm0 5c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3zm0 6c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3z" fill="#CC292B"/>
      </svg>
    ),
    badgeBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
  },
  {
    name: "ChatGPT",
    category: "AI & Automation",
    icon: (
      <svg className="w-7 h-7 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 10.12a5.97 5.97 0 0 0-.5-4.88 6.01 6.01 0 0 0-3.86-2.82 6.01 6.01 0 0 0-6.17 1.3 6 6 0 0 0-4.88-.5 6.01 6.01 0 0 0-2.82 3.86 6.01 6.01 0 0 0 1.3 6.17 6 6 0 0 0 .5 4.88 6.01 6.01 0 0 0 3.86 2.82 6.01 6.01 0 0 0 6.17-1.3 6 6 0 0 0 4.88.5 6.01 6.01 0 0 0 2.82-3.86 6.01 6.01 0 0 0-1.3-6.17zm-9.28 10.08a4.4 4.4 0 0 1-2.2-.6l.12-.07 3.65-2.11a.8.8 0 0 0 .4-.69v-5.16l1.55.9v4.24a4.42 4.42 0 0 1-3.52 3.49zm-7.61-4.4a4.4 4.4 0 0 1-.58-2.22v-.14l3.77-2.18a.8.8 0 0 0 .4-.69v-2.28l1.55.9v5.16a.8.8 0 0 0 .4.69l3.66 2.11a4.43 4.43 0 0 1-9.2-1.36zm-1.07-8.76a4.4 4.4 0 0 1 1.62-1.62l3.77 2.18a.8.8 0 0 0 .8 0l4.47-2.58v1.8a.8.8 0 0 0 .4.69l3.66 2.11a4.42 4.42 0 0 1-5.69 6.57l-3.66-2.11a.8.8 0 0 0-.8 0l-4.57 2.64a4.42 4.42 0 0 1-.9-9.68zm15.17-1.08a4.4 4.4 0 0 1 .58 2.22v.14l-3.77 2.18a.8.8 0 0 0-.4.69v2.28l-1.55-.9v-5.16a.8.8 0 0 0-.4-.69l-3.66-2.11a4.42 4.42 0 0 1 9.2 1.36zm1.07 8.76a4.4 4.4 0 0 1-1.62 1.62l-3.77-2.18a.8.8 0 0 0-.8 0l-4.47 2.58v-1.8a.8.8 0 0 0-.4-.69l-3.66-2.11a4.42 4.42 0 0 1 5.69-6.57l3.66 2.11a.8.8 0 0 0 .8 0l4.57-2.64a4.42 4.42 0 0 1 .9 9.68z" />
      </svg>
    ),
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
  },
  {
    name: "Claude",
    category: "LLM & Code Gen",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#D97757">
        <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
      </svg>
    ),
    badgeBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
  },
  {
    name: "GitHub",
    category: "Version Control & CI/CD",
    icon: (
      <svg className="w-7 h-7 text-stone-900 dark:text-stone-100" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    badgeBg: "bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/20"
  },
  {
    name: "Postman",
    category: "API Testing & Docs",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M16 11l-3-3m0 0l-3 3m3-3v8" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badgeBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L19 8v8l-7 3.9L5 16V8l7-3.8z" fill="#FF9900" />
        <path d="M12 6l5 2.8v5.6L12 17.2 7 14.4V8.8L12 6z" fill="#FF9900" opacity="0.6" />
      </svg>
    ),
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
  },
  {
    name: "Docker",
    category: "Containers & Deployment",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="6" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="10" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="14" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="6" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="10" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="14" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
        <rect x="10" y="2" width="3" height="3" rx="0.5" fill="#2496ED" />
        <path d="M1 15c1.5 2 4.5 3 8 3s9-2 13-3c1 2-1 4-4 4-7 0-11-2-17-4z" fill="#2496ED" />
      </svg>
    ),
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
  }
];

/* Individual Bento Card Subcomponent with dynamic Mouse-Follow Spotlight effect */
function BentoCard({
  project,
  onOpenLightbox,
}: {
  project: Project;
  onOpenLightbox: (screenshotIndex: number) => void;
  key?: string;
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeShotIndex, setActiveShotIndex] = useState(0);

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const currentImageUrl = hasScreenshots
    ? project.screenshots![activeShotIndex]?.url || project.imageUrl
    : project.imageUrl;

  const currentImageTitle = hasScreenshots
    ? project.screenshots![activeShotIndex]?.title || project.title
    : project.title;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl bg-white dark:bg-stone-950 border border-brand-border dark:border-stone-850/80 shadow-sm p-6 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${project.gridSpan}`}
      id={`project-bento-card-${project.id}`}
    >
      {/* Background Interactive Radial Mouse Spotlighting */}
      {isHovered && (
        <div
          className="absolute inset-0 -z-10 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(255, 107, 53, 0.045), transparent 80%)`,
          }}
        />
      )}

      {/* Glass overlay lines on featured cards */}
      {project.featured && (
        <div className="absolute top-0 right-0 py-1.5 px-3.5 bg-brand-accent/10 rounded-bl-xl border-l border-b border-brand-accent/15 z-10">
          <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-brand-accent">Featured Solution</span>
        </div>
      )}

      {/* Core card structure slots */}
      <div className="flex flex-col gap-4">
        
        {/* Project Thumbnail Image Container */}
        <div className="relative w-full h-[190px] rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/40 dark:border-stone-800 shadow-inner group/img">
          <img
            src={currentImageUrl}
            alt={currentImageTitle}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Accent shading layer */}
          <div className="absolute inset-0 bg-stone-900/5 dark:bg-stone-950/20 group-hover/img:opacity-40 transition-opacity" />

          {/* Screenshot zoom overlay button */}
          {hasScreenshots && (
            <button
              onClick={() => onOpenLightbox(activeShotIndex)}
              className="absolute bottom-2.5 right-2.5 p-2 rounded-xl bg-black/65 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 shadow-md transition-all flex items-center gap-1.5 text-xs opacity-90 group-hover/img:opacity-100 hover:scale-105"
              id={`project-expand-${project.id}`}
              title="Click to view full screenshot"
            >
              <Maximize2 className="w-3.5 h-3.5 text-brand-accent" />
              <span className="font-sans text-[11px] font-medium hidden sm:inline">Preview Full UI</span>
            </button>
          )}

          {/* Screenshot Tag overlay badge */}
          {hasScreenshots && project.screenshots![activeShotIndex]?.tag && (
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-wide shadow">
              {project.screenshots![activeShotIndex].tag}
            </div>
          )}
        </div>

        {/* Multi-Screenshot Tab Selector if available */}
        {hasScreenshots && project.screenshots!.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {project.screenshots!.map((shot, idx) => (
              <button
                key={idx}
                onClick={() => setActiveShotIndex(idx)}
                className={`px-2.5 py-1 rounded-lg font-sans text-[11px] font-medium transition-all shrink-0 border ${
                  activeShotIndex === idx
                    ? "bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent border-brand-accent/30 font-semibold"
                    : "bg-stone-50 dark:bg-stone-900/60 text-stone-600 dark:text-stone-400 border-stone-200/50 dark:border-stone-800 hover:border-brand-accent/30"
                }`}
                id={`project-${project.id}-shot-tab-${idx}`}
              >
                {shot.tag || `Screen ${idx + 1}`}
              </button>
            ))}
          </div>
        )}

        {/* Text descriptions */}
        <div>
          <h3 className="font-display font-bold text-xl text-stone-900 dark:text-stone-50 group-hover:text-brand-accent transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </h3>
          <p className="mt-2 font-sans text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

      </div>

      {/* Lower Slots: Tech Stack and Actions */}
      <div className="mt-5 flex flex-col gap-4">
        
        {/* Dynamic Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => {
            const isReact = tech.toLowerCase().includes("react");
            return (
              <span
                key={tech}
                className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border ${
                  isReact
                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25 font-semibold"
                    : "bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-300 border-stone-200/40 dark:border-stone-800/80"
                }`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Client triggers/URLs */}
        <div className="flex items-center justify-between pt-3.5 border-t border-stone-100 dark:border-stone-900">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:text-brand-accent dark:hover:text-brand-accent text-xs font-semibold tracking-wide transition-colors"
                id={`project-gh-${project.id}`}
              >
                <Github className="w-3.5 h-3.5 text-stone-400 hover:text-brand-accent" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="flex items-center gap-1 text-stone-400 dark:text-stone-500 hover:text-brand-accent text-xs font-normal transition-colors"
              id={`project-case-${project.id}`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Case Info</span>
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
