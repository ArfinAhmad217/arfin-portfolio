import { useState, useEffect } from "react";
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Linkedin, Github, FileText, ExternalLink, Sparkles } from "lucide-react";
import { downloadResumePDF } from "../utils/generateResumePDF";
import { PERSONAL_INFO, EDUCATION_DATA } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      id="resume-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-accent/10 dark:bg-brand-accent/20 flex items-center justify-center text-brand-accent">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>MD ARFIN AHMAD – Resume</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-brand-accent/15 text-brand-accent rounded-full font-semibold">
                  1-Page Verified
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF Button */}
            <button
              onClick={() => downloadResumePDF()}
              className="flex items-center gap-1.5 bg-brand-accent hover:bg-orange-600 text-white px-3 sm:px-4 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              id="resume-modal-download-btn"
              title="Download PDF format"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              id="resume-modal-close-btn"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Sheet Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-stone-100 dark:bg-stone-950/60 flex justify-center">
          <div className="w-full max-w-3xl bg-white dark:bg-[#0c0c0e] text-stone-900 dark:text-stone-100 rounded-xl shadow-md border border-stone-200/80 dark:border-stone-800 p-6 sm:p-10 font-sans text-xs sm:text-sm leading-relaxed">
            
            {/* Header */}
            <div className="text-center pb-4 mb-4 border-b-2 border-stone-900 dark:border-stone-200">
              <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-stone-900 dark:text-white uppercase">
                MD ARFIN AHMAD
              </h1>
              <p className="font-medium text-stone-600 dark:text-stone-400 text-xs mt-1 flex items-center justify-center gap-1.5">
                <MapPin className="w-3 h-3 text-brand-accent inline" />
                <span>BiharSharif, Nalanda, Bihar, PIN - 803101</span>
              </p>

              {/* Contact bar */}
              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-stone-700 dark:text-stone-300">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-brand-accent" />
                  <span>+91 6204215086</span>
                </span>
                <span>•</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-brand-accent hover:underline cursor-pointer"
                  title="Click to copy email"
                >
                  <Mail className="w-3 h-3" />
                  <span>syedahmad1306@gmail.com</span>
                  {copied && <Check className="w-3 h-3 text-emerald-500" />}
                </button>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/md-arfin-ahmad-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>linkedin.com/in/md-arfin-ahmad-</span>
                </a>
                <span>•</span>
                <a
                  href="https://github.com/ArfinAhmad217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-stone-800 dark:text-stone-200 hover:underline"
                >
                  <Github className="w-3 h-3" />
                  <span>github.com/ArfinAhmad217</span>
                </a>
              </div>
            </div>

            {/* 1. Career Summary */}
            <div className="mb-5">
              <div className="border-b border-stone-900 dark:border-stone-300 pb-1 mb-2">
                <h2 className="font-bold text-sm sm:text-base tracking-tight text-stone-900 dark:text-white uppercase">
                  Career Summary
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs leading-relaxed text-justify">
                <li>
                  Software Engineer (AI-Backend) with 3 years of hands-on experience designing, developing, and deploying scalable APIs and back-end solutions. REST APIs and AI-powered applications using Python, Flask and FastAPI. Experienced with PostgreSQL, AWS, CI/CD and LLM integration. Proficient in building data-driven applications with SQL and NoSQL databases, integrating external APIs, and optimizing back-end performance. Collaborated with business stakeholders to gather requirements and deliver technical solutions. Automated deployment pipelines using GitHub Actions, reducing deployment time by up to 80%. Experienced in end-to-end database design, scalable applications development, and deployment.
                </li>
              </ul>
            </div>

            {/* 2. Technical Skills */}
            <div className="mb-5">
              <div className="border-b border-stone-900 dark:border-stone-300 pb-1 mb-2">
                <h2 className="font-bold text-sm sm:text-base tracking-tight text-stone-900 dark:text-white uppercase">
                  Technical Skills
                </h2>
              </div>
              <div className="space-y-1.5 text-[11px] sm:text-xs text-stone-800 dark:text-stone-200">
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">Languages:</strong> Python, JavaScript, C#, SQL, HTML, CSS/SASS
                </p>
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">Framework:</strong> FastAPI, Flask, ASP.Net Core Web API, React.js, Streamlit
                </p>
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">Database:</strong> MongoDB, PostgreSQL, Query Optimization, SQLAlchemy
                </p>
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">Cloud & DevOps:</strong> AWS Cloud Services (EC2, S3, IAM), CI/CD Pipeline, Automation (GitHub Actions), Docker
                </p>
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">Technologies:</strong> Git & GitHub, Postman, swagger, Visual studio code
                </p>
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">Other:</strong> OOP, Design Pattern, REST API Architecture, Microservices, Agile Methodologies, Application Monitoring & Debugging
                </p>
                <p>
                  <strong className="font-bold text-stone-900 dark:text-white">AI/GENAI:</strong> Prompt Engineering, AI Agents, GenAI/LLM, OpenAI, LangChain, LangGraph, RAG, Pandas, NumPy, ChromaDB
                </p>
              </div>
            </div>

            {/* 3. Experience */}
            <div className="mb-5">
              <div className="border-b border-stone-900 dark:border-stone-300 pb-1 mb-2.5">
                <h2 className="font-bold text-sm sm:text-base tracking-tight text-stone-900 dark:text-white uppercase">
                  Experience
                </h2>
              </div>

              {/* Mintways */}
              <div className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-1 font-semibold text-xs sm:text-sm text-stone-900 dark:text-white">
                  <span>Mintways Technologies Pvt Ltd</span>
                  <span className="font-medium text-stone-600 dark:text-stone-400 text-xs">May 2023 – May 2025</span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-1 text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 italic mb-1.5">
                  <span className="font-semibold">Software Engineer</span>
                  <span>Bangalore, Karnataka</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs leading-snug">
                  <li>Developed scalable web applications and APIs, integrating 5+ self-developed and third-party services, improving functionality and serving over 200+ daily active users with response times under 300 ms.</li>
                  <li>Designed and optimized PostgreSQL queries, ensuring fast API response times (~300 ms) and worked on microservices-based architecture</li>
                  <li>Built and deployed Flask-based applications, automating CI/CD pipelines using GitHub Actions, reducing deployment time by 80%.</li>
                  <li>Implemented logging and monitoring mechanisms for backend services to identify failures and improve uptime.</li>
                  <li>Led daily Scrum calls with a team of 5 to build interactive reports to represent Treatment Effectiveness, reducing analysis time by 50%.</li>
                  <li>Deployed and managed applications on AWS (EC2, S3, IAM, hosting environments), ensuring high availability, scalability, and reliable production performance.</li>
                  <li>Streamlined Automated deployment and operational workflows using Python and Bash scripts, reducing manual effort and improving system.</li>
                  <li>Integrated Firebase Cloud Messaging for real-time notifications, achieving 95%+ delivery rates and improving engagement by 30% for reliable communication.</li>
                </ul>
              </div>

              {/* Zenia Mobile */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1 font-semibold text-xs sm:text-sm text-stone-900 dark:text-white">
                  <span>Zenia Mobile, Noida, UP (Software Engineer)</span>
                  <span className="font-medium text-stone-600 dark:text-stone-400 text-xs">Sept 2025 – June 2026</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs leading-snug">
                  <li>Contributed to the development of a FastAPI-based School Management System to develop APIs and application features for academic management modules.</li>
                  <li>Built Generative AI/LLM-based features for intelligent query handling, student support, and automated academic assistance, enhancing user interaction and workflow automation.</li>
                  <li>Engineered and executed unit test cases and performed code reviews to ensure software quality and reliability.</li>
                </ul>
              </div>
            </div>

            {/* 4. Projects */}
            <div className="mb-5">
              <div className="border-b border-stone-900 dark:border-stone-300 pb-1 mb-2.5">
                <h2 className="font-bold text-sm sm:text-base tracking-tight text-stone-900 dark:text-white uppercase">
                  Projects
                </h2>
              </div>

              {/* Warehouse Assistant-NL query */}
              <div className="mb-3.5">
                <div className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white">
                  Warehouse Assistant-NL query | <span className="font-normal text-stone-600 dark:text-stone-400">Full stack AI Application | Python, FastAPI, PostgreSQL, Langchain, LLM, ChromaDB, AWS</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs leading-snug">
                  <li>Built an AI-powered warehouse assistant for querying inventory and warehouse data using natural language.</li>
                  <li>Developed FastAPI REST APIs and integrated LLM-based query processing with PostgreSQL and vector search.</li>
                  <li>Implemented PostgreSQL-based data management and ChromaDB for vector storage and semantic search.</li>
                </ul>
              </div>

              {/* Ai_Agentic Chatbot */}
              <div>
                <div className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white">
                  Ai_Agentic Chatbot | <span className="font-normal text-stone-600 dark:text-stone-400">Full Stack AI Application | Python, FastAPI, PostgreSQL, LLM, AWS</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs leading-snug">
                  <li>Developed an AI-powered chatbot using Python and FastAPI with LLM integration for intelligent conversational responses.</li>
                  <li>Implemented REST APIs for authentication, user validation, and application workflows with PostgreSQL database integration.</li>
                  <li>Built AI-driven workflows using prompt engineering and structured responses to improve query handling and task automation.</li>
                </ul>
              </div>
            </div>

            {/* 5. Education */}
            <div>
              <div className="border-b border-stone-900 dark:border-stone-300 pb-1 mb-2">
                <h2 className="font-bold text-sm sm:text-base tracking-tight text-stone-900 dark:text-white uppercase">
                  Education
                </h2>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-1 font-semibold text-xs sm:text-sm text-stone-900 dark:text-white">
                <span>Jamia Millia Islamia</span>
                <span className="font-medium text-stone-600 dark:text-stone-400 text-xs">Nov 2020 – May 2023</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-1 text-[11px] sm:text-xs text-stone-600 dark:text-stone-400">
                <span>Bsc in Computer Science & IT</span>
                <span>New Delhi</span>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
          <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>Exact replica of MD Arfin Ahmad's Official Resume</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadResumePDF()}
              className="flex items-center gap-1.5 bg-[#111111] dark:bg-stone-100 hover:bg-brand-accent dark:hover:bg-brand-accent text-white dark:text-[#111111] hover:text-white dark:hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-brand-accent" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
