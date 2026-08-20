import { Project, ExperienceItem, BlogPost, SkillGroup } from "./types";
import schoolDashboardImg from "./assets/images/school-erp-dashboard.jpg";
import schoolLoginImg from "./assets/images/school-erp-login.jpg";
import schoolPromotionImg from "./assets/images/school-erp-promotion.jpg";
import schoolAddStudentImg from "./assets/images/school-erp-add-student.jpg";
import warehouseSurveyImg from "./assets/images/warehouse-survey-details.jpg";
import warehouseLoginImg from "./assets/images/warehouse-login-portal.jpg";
import warehouseZonalApprovalImg from "./assets/images/warehouse-zonal-approval.jpg";
import agenticChatbotImg from "./assets/images/agentic-chatbot-app.jpg";
import agenticGraphImg from "./assets/images/agentic-graph-view.jpg";
import aiChatbotAgentsImg from "./assets/images/ai-chatbot-agents-interface.jpg";
import warehouseAssistantImg from "./assets/images/warehouse-assistant-ui.jpg";
import warehouseSwaggerImg from "./assets/images/warehouse-swagger-ui.jpg";

export const PERSONAL_INFO = {
  name: "MD ARFIN AHMAD",
  greetings: "👋 Hey! I'm Md Arfin Ahmad",
  title: "SOFTWARE ENGINEER (AI-BACKEND)",
  phone: "+91 6204215086",
  location: "BiharSharif, Nalanda, Bihar, PIN - 803101",
  summary: "Software Engineer (AI-Backend) with 3 years of hands-on experience designing, developing, and deploying scalable APIs and back-end solutions. REST APIs and AI-powered applications using Python, Flask and FastAPI. Experienced with PostgreSQL, AWS, CI/CD and LLM integration. Proficient in building data-driven applications with SQL and NoSQL databases, integrating external APIs, and optimizing back-end performance. Collaborated with business stakeholders to gather requirements and deliver technical solutions. Automated deployment pipelines using GitHub Actions, reducing deployment time by up to 80%. Experienced in end-to-end database design, scalable applications development, and deployment.",
  description: "Software Engineer (AI-Backend) with 3 years of hands-on experience designing, developing, and deploying scalable APIs, back-end solutions, and AI-powered applications using Python, FastAPI, Flask, PostgreSQL, AWS, LangChain, and LLMs.",
  metrics: [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "4+" },
    { label: "Scalable Systems", value: "4+" },
    { label: "AI Specialist", value: "GenAI / LangGraph" }
  ],
  socials: {
    github: "https://github.com/ArfinAhmad217",
    linkedin: "https://www.linkedin.com/in/md-arfin-ahmad-",
    email: "syedahmad1306@gmail.com"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "warehouse-assistant-nlq",
    title: "Warehouse Assistant – Natural Language Query",
    description: "An AI-powered warehouse management assistant that allows users to query warehouse data using natural language instead of writing SQL queries. The application converts user questions into database queries, retrieves relevant warehouse information, and returns clear, easy-to-understand answers.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "LangChain",
      "Groq / LLM",
      "Pydantic",
      "Uvicorn",
      "Docker"
    ],
    imageUrl: warehouseAssistantImg,
    screenshots: [
      {
        title: "Natural Language Query & SQL Generation Interface",
        url: warehouseAssistantImg,
        tag: "NL Query & SQL"
      },
      {
        title: "FastAPI Swagger / OpenAPI REST Documentation",
        url: warehouseSwaggerImg,
        tag: "Swagger API Docs"
      }
    ],
    githubUrl: "https://github.com/ArfinAhmad217",
    liveNote: "Coming Soon",
    featured: true,
    gridSpan: "md:col-span-1"
  },
  {
    id: "ai-agentic-chatbot",
    title: "AI Agentic Chatbot",
    description: "An autonomous multi-agent reasoning and decision-making chatbot leveraging LangGraph state graphs and LangChain orchestrations. Features tool routing, database querying, web retrieval, and an interactive Streamlit UI powered by FastAPI backend services.",
    techStack: ["Python", "Streamlit", "FastAPI", "GenAI / LLM", "LangGraph", "LangChain"],
    imageUrl: aiChatbotAgentsImg,
    screenshots: [
      {
        title: "AI Chatbot Agents – Streamlit Interface (Groq / OpenAI & Tool Routing)",
        url: aiChatbotAgentsImg,
        tag: "Agent UI & Config"
      },
      {
        title: "Agentic Reasoning & Chat Interface",
        url: agenticChatbotImg,
        tag: "Interactive Chat"
      },
      {
        title: "LangGraph Multi-Agent Workflow State",
        url: agenticGraphImg,
        tag: "Graph Workflow"
      }
    ],
    githubUrl: "https://github.com/ArfinAhmad217",
    caseStudyUrl: "#",
    featured: true,
    gridSpan: "md:col-span-1"
  },
  {
    id: "warehouse-system",
    title: "Smart Warehouse Management System",
    description: "An enterprise commodity logistics and inventory tracking system featuring shed survey logging, real-time geolocation tagging, zonal approval workflows, and physical stock telemetry.",
    techStack: ["Python", "Flask", "PostgreSQL", "GitHub"],
    imageUrl: warehouseSurveyImg,
    screenshots: [
      {
        title: "Open Shed Survey & GeoLocation Mapping",
        url: warehouseSurveyImg,
        tag: "Survey & Map"
      },
      {
        title: "Commodity Management Portal Login",
        url: warehouseLoginImg,
        tag: "Secure Login"
      },
      {
        title: "Zonal Head Survey Approval Workflow",
        url: warehouseZonalApprovalImg,
        tag: "Approval Portal"
      }
    ],
    sourceNote: "Private Repository",
    liveNote: "Live but accessible to company",
    caseStudyUrl: "#",
    featured: true,
    gridSpan: "md:col-span-1"
  },
  {
    id: "school-system",
    title: "School Management System",
    description: "An end-to-end academic ERP platform with a modern React.js frontend and FastAPI backend for student enrollment, promotion tracking, fee management, attendance logging, and interactive admin dashboards.",
    techStack: ["React.js", "Python", "FastAPI", "PostgreSQL", "AWS", "GitHub CI/CD"],
    imageUrl: schoolDashboardImg,
    screenshots: [
      {
        title: "Admin Analytics Dashboard",
        url: schoolDashboardImg,
        tag: "Dashboard"
      },
      {
        title: "Student & Faculty Portal Login",
        url: schoolLoginImg,
        tag: "Login Portal"
      },
      {
        title: "Student Promotion Log List",
        url: schoolPromotionImg,
        tag: "Promotion Log"
      },
      {
        title: "Student Enrollment & Records Form",
        url: schoolAddStudentImg,
        tag: "Add Student"
      }
    ],
    sourceNote: "Private (Company Project)",
    liveNote: "Live but accessible to company",
    caseStudyUrl: "#",
    featured: true,
    gridSpan: "md:col-span-1"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Mintways Technologies Pvt Ltd",
    location: "Bangalore, Karnataka",
    logo: "💼",
    role: "Software Engineer & Team Lead",
    duration: "May 2023 - May 2025",
    details: [
      "Served as Team Lead for an engineering team of 5, conducting daily Scrum calls, sprint planning, and driving core product execution.",
      "Developed scalable web applications and APIs, integrating 5+ self-developed and third-party services, serving 200+ daily active users with response times under 300 ms.",
      "Designed and optimized PostgreSQL queries for fast API response times (~300 ms) within microservices-based architecture.",
      "Built and deployed Flask-based applications, automating CI/CD pipelines using GitHub Actions, reducing deployment time by 80%.",
      "Implemented logging and monitoring mechanisms for backend services to identify failures and improve uptime.",
      "Led interactive reports development representing Treatment Effectiveness, reducing analysis time by 50%.",
      "Deployed and managed applications on AWS (EC2, S3, IAM) ensuring high availability, scalability, and production performance.",
      "Integrated Firebase Cloud Messaging for real-time notifications, achieving 95%+ delivery rates and improving engagement by 30%."
    ],
    techUsed: ["Python", "Flask", "PostgreSQL", "AWS", "Team Leadership", "GitHub Actions", "Firebase", "Agile / Scrum"],
    achievements: [
      "Led a 5-member engineering team in Scrum operations and feature delivery",
      "Automated deployment pipelines using GitHub Actions, reducing deployment time by up to 80%",
      "Integrated Firebase Cloud Messaging achieving 95%+ delivery rates and 30% higher engagement"
    ]
  },
  {
    id: "exp-2",
    company: "Zenia Mobile",
    location: "Noida, Uttar Pradesh",
    logo: "📱",
    role: "Software Engineer",
    duration: "Sept 2025 - June 2026",
    details: [
      "Contributed to the development of a School Management System to develop APIs and features for academic management modules.",
      "Built Generative AI/LLM-based features for intelligent query handling, student support, and automated academic assistance, enhancing workflow automation.",
      "Engineered and executed unit test cases and performed code reviews to ensure software quality and reliability."
    ],
    techUsed: ["Python", "GenAI / LLM", "REST APIs", "PostgreSQL", "Unit Testing"],
    achievements: [
      "Built AI/LLM-based features for intelligent query handling and automated academic assistance",
      "Engineered end-to-end backend RESTful APIs for academic management modules"
    ]
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "C#", level: "Intermediate" },
      { name: "SQL", level: "Expert" },
      { name: "HTML / CSS / SASS", level: "Expert" }
    ]
  },
  {
    category: "Frameworks & Web",
    skills: [
      { name: "FastAPI", level: "Expert" },
      { name: "Flask", level: "Expert" },
      { name: "ASP.Net Core Web API", level: "Intermediate" },
      { name: "React.js", level: "Expert" },
      { name: "Streamlit", level: "Expert" }
    ]
  },
  {
    category: "Database & ORM",
    skills: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "SQLAlchemy", level: "Expert" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Query Optimization", level: "Expert" }
    ]
  },
  {
    category: "AI / GenAI Specialist",
    skills: [
      { name: "GenAI / LLM", level: "Expert" },
      { name: "LangChain", level: "Expert" },
      { name: "LangGraph", level: "Expert" },
      { name: "AI Agents", level: "Expert" },
      { name: "Prompt Engineering", level: "Expert" },
      { name: "RAG & ChromaDB", level: "Expert" },
      { name: "Pandas & NumPy", level: "Expert" },
      { name: "OpenAI / Gemini", level: "Expert" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3, IAM)", level: "Expert" },
      { name: "CI/CD Pipeline", level: "Expert" },
      { name: "GitHub Actions", level: "Expert" },
      { name: "Docker", level: "Expert" }
    ]
  },
  {
    category: "Architecture & Tools",
    skills: [
      { name: "REST API Architecture", level: "Expert" },
      { name: "Microservices", level: "Expert" },
      { name: "OOP & Design Patterns", level: "Expert" },
      { name: "Agile / Scrum", level: "Expert" },
      { name: "Postman & Swagger", level: "Expert" },
      { name: "Git & GitHub", level: "Expert" }
    ]
  }
];

export const EDUCATION_DATA = [
  {
    institution: "Jamia Millia Islamia",
    degree: "Bsc in Computer Science & IT",
    duration: "Nov 2020 – May 2023",
    location: "New Delhi",
    icon: "🎓"
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    title: "Sovereign AI: Deciding Between RAG and Fine-Tuning",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    readingTime: "4 min read",
    date: "Jun 10, 2026",
    summary: "RAG brings absolute factual accuracy with grounding references, while fine-tuning alters style and specialized domains. Learn how to combine them into a powerful unified architecture.",
    tags: ["GenAI", "RAG", "System Design"]
  },
  {
    id: "blog-2",
    title: "Building Autonomous AI Agents using Model Context Protocol (MCP)",
    imageUrl: "https://images.unsplash.com/photo-1684369175833-31f08465ca3c?auto=format&fit=crop&w=600&q=80",
    readingTime: "6 min read",
    date: "May 28, 2026",
    summary: "The Model Context Protocol establishes clean security gates allowing LLMs to access database structures and corporate APIs as trusted workspace helpers.",
    tags: ["AI Agents", "MCP", "Python"]
  },
  {
    id: "blog-3",
    title: "Architecting Ultra-Fast APIs with FastAPI and Redis Cache",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    readingTime: "5 min read",
    date: "Apr 15, 2026",
    summary: "Detailed engineering code showcasing state pooling, response serializing optimizations, and real-time cache invalidation with Redis pipelines.",
    tags: ["Backend", "FastAPI", "Redis"]
  }
];
