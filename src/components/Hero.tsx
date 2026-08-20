import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Award, Sparkles, Terminal, NotebookTabs, HardDrive, Cpu, Download, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import arfinProfilePhoto from "../assets/images/Arfin_Photo.jpeg";
import { downloadResumePDF } from "../utils/generateResumePDF";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const stats = [
    { label: "Years Experience", value: "3+", icon: <Terminal className="w-5 h-5 text-brand-accent" /> },
    { label: "Completed Projects", value: "4+", icon: <NotebookTabs className="w-5 h-5 text-brand-accent" /> },
    { label: "Scalable Projects", value: "3+", icon: <HardDrive className="w-5 h-5 text-brand-accent" /> },
    { label: "AI & Backend", value: "Expert", icon: <Cpu className="w-5 h-5 text-brand-accent" /> },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-transparent -z-10" />

      {/* Hero Content Container */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center select-none">
        
        {/* Animated Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-brand-accent/10 dark:bg-brand-accent/25 px-4 py-2 rounded-full border border-brand-accent/20 mb-8"
          id="hero-greeting-badge"
        >
          <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
          <span className="font-sans text-xs md:text-sm font-semibold text-brand-accent dark:text-stone-300">
            {PERSONAL_INFO.greetings}
          </span>
        </motion.div>

        {/* Circular Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mb-8 group"
          id="hero-avatar-container"
        >
          {/* Futuristic Orbit Ring */}
          <div className="absolute inset-[-14px] rounded-full border border-dashed border-brand-accent/30 dark:border-brand-accent/40 animate-[spin_50s_linear_infinite]" />
          <div className="absolute inset-[-6px] rounded-full border border-brand-accent/10 dark:border-stone-800 animate-[spin_20s_linear_infinite]" />
          
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-brand-accent/20 to-orange-100 dark:from-stone-900 dark:to-stone-800 flex items-center justify-center border-2 border-brand-accent/35 dark:border-stone-700 shadow-lg p-1 relative z-10 overflow-hidden">
            <img
              src={arfinProfilePhoto}
              alt="Md Arfin Ahmad - Software Engineer"
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-stone-900 border border-brand-border dark:border-stone-800 shadow-md px-2.5 py-1 rounded-full flex items-center gap-1 z-20">
            <Award className="w-3.5 h-3.5 text-brand-accent" />
            <span className="font-mono text-[9px] font-bold text-stone-700 dark:text-stone-300">NYC</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-brand-text-primary dark:text-white max-w-4xl"
          id="hero-main-title"
        >
          <span className="bg-gradient-to-r from-stone-900 via-brand-accent to-stone-600 dark:from-white dark:via-brand-accent dark:to-stone-300 bg-clip-text text-transparent">
            {PERSONAL_INFO.title}
          </span>
        </motion.h1>

        {/* Minimal Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 font-sans text-stone-600 dark:text-stone-400 text-base md:text-xl max-w-2xl leading-relaxed"
          id="hero-description"
        >
          {PERSONAL_INFO.description}
        </motion.p>

        {/* Magnetic/Premium Call to Actions with Scale Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-3.5 items-center justify-center w-full px-4"
          id="hero-cta-group"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="w-full sm:w-auto bg-[#111111] dark:bg-stone-100 hover:bg-brand-accent dark:hover:bg-brand-accent text-white dark:text-[#111111] hover:text-white dark:hover:text-white font-medium text-sm tracking-wide px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group focus:outline-none cursor-pointer"
            id="hero-primary-cta"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto bg-brand-accent hover:bg-orange-600 text-white font-medium text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              id="hero-view-resume-cta"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          )}
          
          <button
            onClick={() => downloadResumePDF()}
            className="w-full sm:w-auto bg-white/90 dark:bg-stone-900/90 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
            id="hero-download-resume-cta"
          >
            <Download className="w-4 h-4 text-brand-accent" />
            <span>Download PDF</span>
          </button>
        </motion.div>

        {/* Dynamic Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 flex items-center gap-5"
          id="hero-socials-group"
        >
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-brand-accent dark:hover:text-brand-accent rounded-xl border border-brand-border dark:border-stone-800/80 hover:shadow-md transition-all h-11 w-11 flex items-center justify-center group"
            id="hero-social-github"
            title="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-brand-accent dark:hover:text-brand-accent rounded-xl border border-brand-border dark:border-stone-800/80 hover:shadow-md transition-all h-11 w-11 flex items-center justify-center group"
            id="hero-social-linkedin"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socials.email}`}
            className="p-3 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-brand-accent dark:hover:text-brand-accent rounded-xl border border-brand-border dark:border-stone-800/80 hover:shadow-md transition-all h-11 w-11 flex items-center justify-center group"
            id="hero-social-email"
            title="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Metric / Stat Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
          id="hero-stats-grid"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-brand-border dark:border-stone-800 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
            >
              <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-stone-800/80 mb-2 transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <span className="font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-stone-100">
                {stat.value}
              </span>
              <p className="mt-1 font-sans text-xs font-medium text-stone-500 dark:text-stone-400 group-hover:text-brand-accent transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
