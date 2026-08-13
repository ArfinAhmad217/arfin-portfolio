import { Project, ExperienceItem, BlogPost, SkillGroup } from "./types";

export const PERSONAL_INFO = {
  name: "Md Arfin Ahmad",
  greetings: "👋 Hey! I'm Md Arfin Ahmad",
  title: "SOFTWARE ENGINEER",
  description: "3 years of experience in software development, specializing in Python, FastAPI, Flask, Django, and AI/GenAI. Experienced in building scalable backend systems, REST APIs, and AI-powered applications with PostgreSQL and AWS. I enjoy building practical AI-powered solutions while keeping backend systems simple, scalable, and reliable.",
  metrics: [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "2+" },
    { label: "Scalable Projects", value: "2+" },
    { label: "AI Specialist", value: "GenAI" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "syedahmad1306@gmail.com"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "warehouse-system",
    title: "Smart Warehouse Management System",
    description: "A highly-responsive logistics and inventory tracker visualizing live physical stocks, shipment routing pipelines, and stock alert levels with real-time telemetry dashboards.",
    techStack: ["Python", "Flask", "PostgreSQL", "GitHub"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo/warehouse",
    githubUrl: "https://github.com",
    caseStudyUrl: "#",
    featured: true,
    gridSpan: "md:col-span-1"
  },
  {
    id: "school-system",
    title: "School Management System",
    description: "An end-to-end academic platform for student enrollment, grade management, automated attendance logging, teacher scheduling, fee management, and parent-teacher communication portals.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "AWS", "GitHub CI/CD"],
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo/school",
    githubUrl: "https://github.com",
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
      { name: "C#", level: "Expert" },
      { name: "SQL", level: "Expert" },
      { name: "HTML / CSS", level: "Expert" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Canvas", level: "Expert" }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "FastAPI", level: "Expert" },
      { name: "Express / Node.js", level: "Expert" },
      { name: "Flask", level: "Expert" },
      { name: "Django", level: "Expert" },
      { name: "SQL Server / PostgreSQL", level: "Expert" }
    ]
  },
  {
    category: "AI / GenAI Specialist",
    skills: [
      { name: "LangChain Agents", level: "Expert" },
      { name: "OpenAI / Gemini APIs", level: "Expert" },
      { name: "RAG Architectures", level: "Beginner" },
      { name: "ChromaDB / Vector Search", level: "Beginner" },
      { name: "Model Context Protocol (MCP)", level: "Beginner" },
      { name: "AI Agents Workflows", level: "Beginner" }
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker Containers", level: "Expert" },
      { name: "AWS Cloud Services", level: "Intermediate" },
      { name: "GitHub Actions CI/CD", level: "Expert" }
    ]
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
