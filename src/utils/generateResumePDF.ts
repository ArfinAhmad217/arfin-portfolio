import { jsPDF } from "jspdf";

export function generateResumeDoc() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 36; // 0.5 inch margins (clean & spacious)
  const contentWidth = pageWidth - margin * 2;
  let y = 36;

  // Helper function for adding clean horizontal section rules
  const addSeparator = (currentY: number) => {
    doc.setDrawColor(30, 41, 59); // Slate-800
    doc.setLineWidth(1);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    return currentY + 12;
  };

  // Helper for section headers
  const addSectionHeader = (title: string, currentY: number) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title, margin, currentY);
    return addSeparator(currentY + 3);
  };

  // 1. HEADER - NAME
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  doc.text("MD ARFIN AHMAD", pageWidth / 2, y, { align: "center" });
  y += 14;

  // ADDRESS
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("BiharSharif, Nalanda, Bihar, PIN - 803101", pageWidth / 2, y, { align: "center" });
  y += 13;

  // CONTACT INFORMATION
  doc.setFontSize(8.5);
  doc.setTextColor(30, 58, 138); // Deep accent
  const contactText = "syedahmad1306@gmail.com   |   linkedin.com/in/md-arfin-rizvi-07765527b/   |   github.com/ArfinAhmad217";
  doc.text(contactText, pageWidth / 2, y, { align: "center" });
  y += 18;

  // 2. CAREER SUMMARY
  y = addSectionHeader("Career Summary", y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);

  const summaryText =
    "Software Engineer (Backend) with 3 years of hands-on experience designing, developing, and deploying scalable APIs and back-end solutions. REST APIs and AI-powered applications using Python, Flask and FastAPI. Experienced with PostgreSQL, AWS, CI/CD and LLM integration. Proficient in building data-driven applications with SQL and NoSQL databases, integrating external APIs, and optimizing back-end performance. Collaborated with business stakeholders to gather requirements and deliver technical solutions. Automated deployment pipelines using GitHub Actions, reducing deployment time by up to 80%. Experienced in end-to-end database design, scalable applications development, and deployment.";

  doc.text("•", margin, y);
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth - 10);
  doc.text(summaryLines, margin + 8, y);
  y += summaryLines.length * 11 + 10;

  // 3. TECHNICAL SKILLS
  y = addSectionHeader("Technical Skills", y);
  doc.setFontSize(8.5);

  const skills = [
    { label: "Languages", value: "Python, JavaScript, C#, SQL, HTML, CSS/SASS" },
    { label: "Framework", value: "FastAPI, Flask, ASP.Net Core Web API" },
    { label: "Database", value: "MongoDB, PostgreSQL, Query Optimization, SQLAlchemy, Pytorch" },
    { label: "Cloud & DevOps", value: "AWS Cloud Services (EC2, S3, IAM), CI/CD Pipeline Automation (GitHub Actions), Docker" },
    { label: "Technologies", value: "Git & GitHub, Linux (Ubuntu), LangChain, LangGraph, RAG, Pandas, NumPy" },
    { label: "Other", value: "OOP, Design Pattern, REST API Architecture, Microservices, Agile Methodologies, Application Monitoring & Debugging, Prompt Engineering, AI Agents, GenAI/LLM, OpenAI, JWT Authentication, Redis" }
  ];

  skills.forEach((s) => {
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    const prefix = `${s.label}: `;
    doc.text(prefix, margin, y);
    const prefixWidth = doc.getTextWidth(prefix);

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    const valueLines = doc.splitTextToSize(s.value, contentWidth - prefixWidth);
    
    doc.text(valueLines[0], margin + prefixWidth, y);
    y += 11;
    for (let i = 1; i < valueLines.length; i++) {
      doc.text(valueLines[i], margin + 10, y);
      y += 11;
    }
  });
  y += 6;

  // 4. EXPERIENCE
  y = addSectionHeader("Experience", y);

  // Job 1
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Mintways Technologies Pvt Ltd", margin, y);
  doc.text("May 2023 – May 2025", pageWidth - margin, y, { align: "right" });
  y += 11;

  doc.setFont("Helvetica", "bolditalic");
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text("Software Engineer & Team Lead", margin, y);
  doc.setFont("Helvetica", "normal");
  doc.text("Bangalore, Karnataka", pageWidth - margin, y, { align: "right" });
  y += 12;

  const exp1Bullets = [
    "Served as Team Lead for an engineering team of 5, facilitating daily Scrum calls, sprint planning, and driving core product execution.",
    "Developed scalable web applications and APIs, integrating 5+ self-developed and third-party services, improving functionality and serving over 200+ daily active users with response times under 300 ms.",
    "Designed and optimized PostgreSQL queries, ensuring fast API response times (~300 ms) and worked on microservices-based architecture.",
    "Built and deployed Flask-based applications, automating CI/CD pipelines using GitHub Actions, reducing deployment time by 80%.",
    "Implemented logging and monitoring mechanisms for backend services to identify failures and improve uptime.",
    "Led daily Scrum calls with a team of 5 to build interactive reports to represent Treatment Effectiveness, reducing analysis time by 50%.",
    "Deployed and managed applications on AWS (EC2, S3, IAM, hosting environments), ensuring high availability, scalability, and reliable production performance.",
    "Streamlined Automated deployment and operational workflows using Python and Bash scripts, reducing manual effort and improving system.",
    "Integrated Firebase Cloud Messaging for real-time notifications, achieving 95%+ delivery rates and improving engagement by 30% for reliable communication."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  exp1Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 12);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 10 + 2;
  });

  y += 4;

  // Job 2
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Zenia Mobile, Noida, UP (Software Engineer)", margin, y);
  doc.text("Sept 2025 – June 2026", pageWidth - margin, y, { align: "right" });
  y += 12;

  const exp2Bullets = [
    "Contributed to the development of a School Management System to develop APIs and application features for academic management modules.",
    "Built Generative AI/LLM-based features for intelligent query handling, student support, and automated academic assistance, enhancing user interaction and workflow automation.",
    "Engineered and executed unit test cases and performed code reviews to ensure software quality and reliability."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  exp2Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 12);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 10 + 2;
  });

  y += 6;

  // 5. PROJECTS
  y = addSectionHeader("Projects", y);

  // Project 1
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("School Management System | Full stack Web Application | Python, FastAPI, PostgreSQL, AWS", margin, y);
  doc.text("Sep 2025", pageWidth - margin, y, { align: "right" });
  y += 11;

  const proj1Bullets = [
    "Built an ERP-based School Management System with a React Frontend using FastAPI with features like student, teacher, attendance, and exam management. Integrated Generative AI/LLM-based chatbot functionality for automated query handling and student support.",
    "Designed and implemented RESTful APIs for mobile app integration and implemented Python-based modules for anomaly detection and automatic timetable generation. Also led a team of 4 back-end developers during development."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  proj1Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 12);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 10 + 2;
  });

  y += 4;

  // Project 2
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("SLCM -Warehouse | Full Stack Web Application | Python, Flask, PostgreSQL, AWS", margin, y);
  doc.text("Aug 2023", pageWidth - margin, y, { align: "right" });
  y += 11;

  const proj2Bullets = [
    "Developed and enhanced Web APIs for login authentication and user validation. Created APIs for image and video upload functionalities with proper validation and storage handling. Worked on backend services for handling warehouse data.",
    "Created features for a Warehouse System focusing on inventory and operational workflows."
  ];

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  proj2Bullets.forEach((bullet) => {
    doc.text("•", margin + 2, y);
    const bulletLines = doc.splitTextToSize(bullet, contentWidth - 12);
    doc.text(bulletLines, margin + 10, y);
    y += bulletLines.length * 10 + 2;
  });

  y += 6;

  // 6. EDUCATION
  y = addSectionHeader("Education", y);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Jamia Millia Islamia", margin, y);
  doc.text("Nov 2020 – May 2023", pageWidth - margin, y, { align: "right" });
  y += 11;

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text("BCA in Computer Science & IT", margin, y);
  doc.text("New Delhi", pageWidth - margin, y, { align: "right" });

  return doc;
}

export function downloadResumePDF() {
  const doc = generateResumeDoc();
  doc.save("Md_Arfin_Ahmad_Resume.pdf");
}

