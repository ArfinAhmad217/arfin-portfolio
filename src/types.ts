export interface ProjectScreenshot {
  title: string;
  url: string;
  tag?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  screenshots?: ProjectScreenshot[];
  liveUrl?: string;
  liveNote?: string;
  githubUrl?: string;
  sourceNote?: string;
  caseStudyUrl?: string;
  featured: boolean;
  gridSpan: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location?: string;
  logo: string; // Tailwind color or emoji
  role: string;
  duration: string;
  details: string[];
  techUsed: string[];
  achievements?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  imageUrl: string;
  readingTime: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level: string; // e.g., 'Expert', 'Intermediate'
    iconName?: string; // name of Lucide icon if any
  }[];
}
