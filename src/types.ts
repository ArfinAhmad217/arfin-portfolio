export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  gridSpan: 'col-span-1' | 'col-span-2' | 'col-span-3' | 'md:col-span-1' | 'md:col-span-2' | 'md:col-span-3' | 'lg:col-span-2' | 'lg:col-span-3';
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
