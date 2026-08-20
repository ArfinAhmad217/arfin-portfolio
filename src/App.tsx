import { useState, useEffect } from "react";
import BackgroundGrid from "./components/BackgroundGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  // Theme state: default to dark for the "futuristic workspace" vibe!
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Sync dark class on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Track scrolling progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up intersection observers for active nav element
  useEffect(() => {
    const sections = ["about", "experience", "projects", "skills", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-45% 0px -45% 0px", // detect when section represents middle section of screen
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-accent selection:text-white transition-colors duration-300">
      
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-accent z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        id="viewport-scroll-progress"
      />

      {/* Futuristic Geometric Backdrop and Particles */}
      <BackgroundGrid />

      {/* Floating Header Navigation Bar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenResume={handleOpenResume}
      />

      {/* Primary Landing Page Container */}
      <main className="relative z-10 w-full">
        
        {/* Hero / About Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Experience Timeline */}
        <Experience />

        {/* Bento Grid Projects */}
        <Projects />

        {/* Skills Board */}
        <Skills />

        {/* Message Panel / Contacts */}
        <Contact />

      </main>

      {/* Footnote information */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Interactive In-App Resume Sheet Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
