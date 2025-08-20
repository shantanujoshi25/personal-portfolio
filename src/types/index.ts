export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'cloud' | 'database' | 'ml' | 'testing';
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  dateRange: string;
  gpa?: string;
}