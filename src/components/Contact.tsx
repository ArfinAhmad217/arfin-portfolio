import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Send, Github, Linkedin, Briefcase, Globe, Cpu, Search, Copy, Check } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const nextState = { ...prev, [name]: value };
      if (name === "projectType" && value === "Job Opportunity") {
        nextState.budget = "";
      }
      return nextState;
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isJobOpp = formData.projectType === "Job Opportunity";

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.projectType ||
      (!isJobOpp && !formData.budget) ||
      !formData.message.trim()
    ) {
      return;
    }

    const emailTo = PERSONAL_INFO.socials.email; // syedahmad1306@gmail.com
    const emailSubject = encodeURIComponent(
      isJobOpp ? "Job Opportunity" : formData.projectType
    );

    const budgetSection = !isJobOpp && formData.budget ? `Estimated Budget: ${formData.budget}\n` : "";

    const bodyText = `Hello Md Arfin Ahmad,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nProject Type: ${formData.projectType}\n${budgetSection}\nMessage:\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}`;

    const emailBody = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    setSubmitted(true);
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
    window.location.href = mailtoUrl;
  };

  const socialHandles = [
    { name: "GitHub", url: PERSONAL_INFO.socials.github, icon: <Github className="w-5.5 h-5.5" /> },
    { name: "LinkedIn", url: PERSONAL_INFO.socials.linkedin, icon: <Linkedin className="w-5.5 h-5.5" /> },
    { name: "Direct Email", url: `mailto:${PERSONAL_INFO.socials.email}`, icon: <Mail className="w-5.5 h-5.5" /> },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-transparent relative">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-stone-600 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50">
            <Mail className="w-3.5 h-3.5 text-brand-accent" />
            <span>Connection Gate</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-text-primary dark:text-white mt-4 max-w-lg">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-12 h-1 bg-brand-accent rounded mt-4" />
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Direct Links & Info */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between gap-8 bg-white dark:bg-stone-950 border border-brand-border dark:border-stone-850 p-8 rounded-3xl shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-brand-accent">
                <Briefcase className="w-5 h-5" />
                <span className="font-display font-bold text-xs uppercase tracking-wider">Offered Services</span>
              </div>
              
              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800/80 flex items-center gap-3.5 transition-all hover:border-brand-accent/40">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                    <Globe className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100">
                      Web Services & Development
                    </h4>
                    <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      Scalable RESTful APIs, microservices & full-stack web applications
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800/80 flex items-center gap-3.5 transition-all hover:border-brand-accent/40">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                    <Cpu className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100">
                      AI Powered Solutions
                    </h4>
                    <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      GenAI / LLM integration, intelligent chatbot systems & automated workflows
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800/80 flex items-center gap-3.5 transition-all hover:border-brand-accent/40">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                    <Search className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-stone-900 dark:text-stone-100">
                      SEO & Optimizations
                    </h4>
                    <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      Database query tuning, API latency optimization & technical SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-wider font-bold text-stone-400">
                Connect and sync profiles:
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialHandles.map((handle) => (
                  <a
                    key={handle.name}
                    href={handle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-300 hover:text-white dark:hover:text-[#111111] hover:bg-brand-accent dark:hover:bg-stone-100 hover:scale-105 active:scale-95 border border-stone-200/50 dark:border-stone-800 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-orange-400/20 hover:shadow-md"
                    title={handle.name}
                    id={`social-link-${handle.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <span className="group-hover:animate-[bounce_0.8s_ease-in-out_1]">
                      {handle.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Form Area */}
          <div className="col-span-1 lg:col-span-7 bg-white dark:bg-stone-950 border border-brand-border dark:border-stone-855 p-8 rounded-3xl shadow-sm">
            <form onSubmit={handleFormSubmit} className="space-y-5" id="contact-form">
              
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-mono text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Arfin Ahmad"
                    className="w-full bg-stone-50/60 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/25 focus:border-brand-accent/80 text-stone-800 dark:text-white transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="font-mono text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="arfin@example.com"
                    className="w-full bg-stone-50/60 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/25 focus:border-brand-accent/80 text-stone-800 dark:text-white transition-all font-sans"
                  />
                </div>
              </div>

              {/* Project Type & Estimated Budget Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className={`space-y-1.5 ${formData.projectType === "Job Opportunity" ? "sm:col-span-2" : ""}`}>
                  <label htmlFor="contact-project-type" className="font-mono text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50/60 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/25 focus:border-brand-accent/80 text-stone-800 dark:text-white transition-all font-sans cursor-pointer"
                  >
                    <option value="" disabled className="bg-white dark:bg-stone-900 text-stone-400">
                      Select Project Type
                    </option>
                    <option value="Freelance Project" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                      Freelance Project
                    </option>
                    <option value="Web Development" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                      Web Development
                    </option>
                    <option value="AI / GenAI Project" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                      AI / GenAI Project
                    </option>
                    <option value="Backend / API Development" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                      Backend / API Development
                    </option>
                    <option value="Job Opportunity" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                      Job Opportunity
                    </option>
                    <option value="Other" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                      Other
                    </option>
                  </select>
                </div>

                {formData.projectType !== "Job Opportunity" && (
                  <div className="space-y-1.5">
                    <label htmlFor="contact-budget" className="font-mono text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">
                      Estimated Budget
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50/60 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/25 focus:border-brand-accent/80 text-stone-800 dark:text-white transition-all font-sans cursor-pointer"
                    >
                      <option value="" disabled className="bg-white dark:bg-stone-900 text-stone-400">
                        Select Budget Range
                      </option>
                      <option value="Under $250" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                        Under $250
                      </option>
                      <option value="$250 – $500" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                        $250 – $500
                      </option>
                      <option value="$500 – $1,000" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                        $500 – $1,000
                      </option>
                      <option value="$1,000 – $2,500" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                        $1,000 – $2,500
                      </option>
                      <option value="$2,500+" className="bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100">
                        $2,500+
                      </option>
                    </select>
                  </div>
                )}
              </div>

              {/* Message Block */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="font-mono text-[10px] uppercase font-semibold text-stone-500 dark:text-stone-400">
                  Detailed Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project deadlines or operational framework requirements..."
                  className="w-full bg-stone-50/60 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/25 focus:border-brand-accent/80 text-stone-800 dark:text-white transition-all font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#111111] dark:bg-stone-100 hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] text-white dark:text-[#111111] hover:text-white dark:hover:text-white font-medium text-sm py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none cursor-pointer"
                id="contact-submit-btn"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              {/* Minimal Fallback Message */}
              {submitted && (
                <div className="text-center pt-2 animate-fade-in" id="contact-form-fallback">
                  <p className="font-sans text-xs text-stone-500 dark:text-stone-400">
                    Email app didn't open?{" "}
                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="text-brand-accent hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{copied ? "Copied address!" : "Copy my email address"}</span>
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
