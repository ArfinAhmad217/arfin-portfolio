import { jsPDF } from "jspdf";

export function generateResumeDoc() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 32; // Crisp margins to fit neatly
  const contentWidth = pageWidth - margin * 2;
  let y = 30;

  // Helper function for adding clean horizontal section rules
  const addSeparator = (currentY: number) => {
    doc.setDrawColor(15, 23, 42); // slate-900
    doc.setLineWidth(0.8);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    return currentY + 10;
  };

  // Helper for section headers
  const addSectionHeader = (title: string, currentY: number) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title, margin, currentY);
    return addSeparator(currentY + 2);
  };

  // 1. HEADER - NAME
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text("MD ARFIN AHMAD", pageWidth / 2, y, { align: "center" });
  y += 12;

  // ADDRESS
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text("BiharSharif, Nalanda, Bihar, PIN - 803101", pageWidth / 2, y, { align: "center" });
  y += 11;

  // CONTACT INFORMATION ROW
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  const contactText = "+91 6204215086   |   syedahmad1306@gmail.com   |   linkedin.com/in/md-arfin-ahmad-   |   github.com/ArfinAhmad217";
  doc.text(contactText, pageWidth / 2, y, { align: "center" });
  y += 15;

  // 2. CAREER SUMMARY
  y = addSectionHeader("Career Summary", y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.8);
  doc.setTextColor(30, 41, 59);

  const summaryText =
    "Software Engineer (AI-Backend) with 3 years of hands-on experience designing, developing, and deploying scalable APIs and back-end solutions. REST APIs and AI-powered applications using Python, Flask and FastAPI. Experienced with PostgreSQL, AWS, CI/CD and LLM integration. Proficient in building data-driven applications with SQL and NoSQL databases, integrating external APIs, and optimizing back-end performance. Collaborated with business stakeholders to gather requirements and deliver technical solutions. Automated deployment pipelines using GitHub Actions, reducing deployment time by up to 80%. Experienced in end-to-end database design, scalable applications development, and deployment.";

  doc.text("•", margin + 1, y);
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth - 10);
  doc.text(summaryLines, margin + 9, y);
  y += summaryLines.length * 9.5 + 8;

  // 3. TECHNICAL SKILLS
  y = addSectionHeader("Technical Skills", y);
  doc.setFontSize(7.8);

  const skills = [
    { label: "Languages", value: "Python, JavaScript, C#, SQL, HTML, CSS/SASS" },
    { label: "Framework", value: "FastAPI, Flask, ASP.Net Core Web API, React.js, Streamlit" },
    { label: "Database", value: "MongoDB, PostgreSQL, Query Optimization, SQLAlchemy" },
    { label: "Cloud & DevOps", value: "AWS Cloud Services (EC2, S3, IAM), CI/CD Pipeline, Automation (GitHub Actions), Docker" },
    { label: "Technologies", value: "Git & GitHub, Postman, swagger, Visual studio code" },
    { label: "Other", value: "OOP, Design Pattern, REST API Architecture, Microservices, Agile Methodologies, Application Monitoring & Debugging" },
    { label: "AI/GENAI", value: "Prompt Engineering, AI Agents, GenAI/LLM, OpenAI, LangChain, LangGraph, RAG, Pandas, NumPy" }
  ];

  skills.forEach((s) => {
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    const prefix = `${s.label}: `;
    doc.text(prefix, margin + 2, y);
    const prefixWidth = doc.getTextWidth(prefix);

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    const valueLines = doc.splitTextToSize(s.value, contentWidth - prefixWidth - 4);
    
    doc.text(valueLines[0], margin + 2 + prefixWidth, y);
    y += 9.5;
    for (let i = 1; i < valueLines.length; i++) {
      doc.text(valueLines[i], margin + 8, y);
      y += 9.5;
    }
  });
  y += 5;

  // 4. EXPERIENCE
  y = addSectionHeader("Experience", y);

  // Job 1: Mintways Technologies
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(15, 23, 42);
  doc.text("Mintways Technologies Pvt Ltd", margin + 2, y);
  doc.text("May 2023 – May 2025", pageWidth - margin, y, { align: "right" });
  y += 9.5;

  doc.setFont("Helvetica", "bolditalic");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text("Software Engineer", margin + 2, y);
  doc.setFont("Helvetica", "normal");
  doc.text("Bangalore, Karnataka", pageWidth - margin, y, { align: "right" });
  y += 9.5;

  const exp1Bullets = [
    "Developed scalable web applications and APIs, integrating 5+ self-developed and third-party services, improving functionality and serving over 200+ daily active users with response times under 300 ms.",
    "Designed and optimized PostgreSQL queries, ensuring fast API response times (~300 ms) and worked on microservices-based architecture",
    "Built and deployed Flask-based applications, automating CI/CD pipelines using GitHub Actions, reducing deployment time by 80%.",
    "Implemented logging and monitoring mechanisms for backend services to identify failures and improve uptime.",
    "Led daily Scrum calls with a team of 5 to build interactive reports to represent Treatment Effectiveness, reducing analysis time by 50%.",
    "Deployed and managed applications on AWS (EC2, S3, IAM, hosting environments), ensuring high availability, scalability, and reliable production performance.",
    "Streamlined Automated deployment and operational workflows using Python and Bash scripts, reducing manual effort and improving system.",
    "Integrated Firebase Cloud Messaging for real-time notifications, achieving 95%+ delivery rates and improving engagement by 30% for reliable communication."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.6);
  doc.setTextColor(30, 41, 59);

  exp1Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 14);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 9 + 1.5;
  });

  y += 3;

  // Job 2: Zenia Mobile
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(15, 23, 42);
  doc.text("Zenia Mobile, Noida, UP (Software Engineer)", margin + 2, y);
  doc.text("Sept 2025 – June 2026", pageWidth - margin, y, { align: "right" });
  y += 9.5;

  const exp2Bullets = [
    "Contributed to the development of a FastAPI-based School Management System to develop APIs and application features for academic management modules.",
    "Built Generative AI/LLM-based features for intelligent query handling, student support, and automated academic assistance, enhancing user interaction and workflow automation.",
    "Engineered and executed unit test cases and performed code reviews to ensure software quality and reliability."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.6);
  doc.setTextColor(30, 41, 59);

  exp2Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 14);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 9 + 1.5;
  });

  y += 5;

  // 5. PROJECTS
  y = addSectionHeader("Projects", y);

  // Project 1 - Warehouse Assistant-NL query
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.4);
  doc.setTextColor(15, 23, 42);
  doc.text("Warehouse Assistant-NL query | Full stack AI Application | Python, FastAPI, PostgreSQL, Langchain, LLM, ChromaDB, AWS", margin + 2, y);
  y += 9.5;

  const proj1Bullets = [
    "Built an AI-powered warehouse assistant for querying inventory and warehouse data using natural language.",
    "Developed FastAPI REST APIs and integrated LLM-based query processing with PostgreSQL and vector search.",
    "Implemented PostgreSQL-based data management and ChromaDB for vector storage and semantic search."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.6);
  doc.setTextColor(30, 41, 59);

  proj1Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 14);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 9 + 1.5;
  });

  y += 3;

  // Project 2 - Ai_Agentic Chatbot
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.4);
  doc.setTextColor(15, 23, 42);
  doc.text("Ai_Agentic Chatbot | Full Stack AI Application | Python, FastAPI, PostgreSQL, LLM, AWS", margin + 2, y);
  y += 9.5;

  const proj2Bullets = [
    "Developed an AI-powered chatbot using Python and FastAPI with LLM integration for intelligent conversational responses.",
    "Implemented REST APIs for authentication, user validation, and application workflows with PostgreSQL database integration.",
    "Built AI-driven workflows using prompt engineering and structured responses to improve query handling and task automation."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7.6);
  doc.setTextColor(30, 41, 59);

  proj2Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 14);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 9 + 1.5;
  });

  y += 5;

  // 6. EDUCATION
  y = addSectionHeader("Education", y);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.8);
  doc.setTextColor(15, 23, 42);
  doc.text("Jamia Millia Islamia", margin + 2, y);
  doc.text("Nov 2020 – May 2023", pageWidth - margin, y, { align: "right" });
  y += 9.5;

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text("Bsc in Computer Science & IT", margin + 2, y);
  doc.text("New Delhi", pageWidth - margin, y, { align: "right" });

  return doc;
}

export function downloadResumePDF() {
  const doc = generateResumeDoc();
  doc.save("Md_Arfin_Ahmad_Resume.pdf");
}
