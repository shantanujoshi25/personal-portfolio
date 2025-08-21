import { Project, Experience, Skill, ContactInfo } from '../types';

export const PERSONAL_INFO = {
  name: "Shantanu Joshi",
  tagline: "Full-Stack Developer | 3+ Years Experience | Java, Python, React Expertise",
  location: "San Jose, CA",
  phone: "+1 (669)-336-9774",
  email: "shan.joshi2504@gmail.com",
  professionalSummary: `Passionate builder with 3+ years crafting scalable solutions from concept to deployment. Constantly learning through 200+ coding challenges across diverse algorithms while driving innovation with AI automation that boosted team productivity by 25%. Recently contributed to payment systems serving 200K+ users at Corpay, and I'm excited to grow and contribute as a New Grad SWE.`,
  quote: "The impediment to action advances action. What stands in the way becomes the way.",
  resumePath: "/resume.pdf"
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "HTML", category: "languages" },
  { name: "CSS", category: "languages" },
  
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Angular", category: "frontend" },
  
  // Backend/Frameworks
  { name: "Spring Boot", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Microservices", category: "backend" },
  
  // Cloud/DevOps
  { name: "AWS (EC2, S3, Lambda, RDS)", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Kubernetes", category: "cloud" },
  { name: "Jenkins", category: "cloud" },
  { name: "CI/CD", category: "cloud" },
  { name: "Azure DevOps", category: "cloud" },
  
  // Databases
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Oracle", category: "database" },
  { name: "Google BigQuery", category: "database" },
  
  // Machine Learning/Data
  { name: "TensorFlow", category: "ml" },
  { name: "Scikit-learn", category: "ml" },
  { name: "Pandas", category: "ml" },
  { name: "NumPy", category: "ml" },
  { name: "Matplotlib", category: "ml" },
  
  // Testing/Tools
  { name: "Jest", category: "testing" },
  { name: "JUnit", category: "testing" },
  { name: "Pytest", category: "testing" },
  { name: "Git", category: "testing" },
  { name: "Linux/Unix", category: "testing" }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    title: "Full Stack Developer Intern",
    company: "Corpay, USA",
    dateRange: "June 2025 - August 2025",
    description: "Optimized features for full-stack payment applications with Hugo JS for static site generation, React.js for dynamic UIs, and Express.js APIs for user authentication and transaction processing (100K+ fleet management users). Collaborated in sprint planning, code reviews, and system architecture discussions for API integration and payment platform enhancements."
  },
  {
    id: "2",
    title: "Software Developer",
    company: "Daxaplus Limited, Remote",
    dateRange: "June 2023 - May 2024",
    description: "Proposed and prototyped AI-powered assessment features leveraging Python (Flask, OpenAI API, Pandas) and React frontend, driving 25% productivity improvement for 2,000+ monthly evaluations. Designed and integrated Azure DevOps CI/CD pipelines with Docker containerization, orchestrating deployment processes across multiple environments."
  },
  {
    id: "3",
    title: "Systems Engineer - Digital",
    company: "Tata Consultancy Services, India",
    dateRange: "November 2020 - May 2023",
    description: "Client: Royal Bank of Canada (RBC). Engineered cross-platform MFA login using REST/SOAP APIs and OAuth 2.0 for secure access across mobile and web clients for 200K+ banking customers. Developed RESTful APIs with Spring Boot and JPA achieving 35% faster data retrieval. Led Email Automation platform development with 95% processing time reduction. Spearheaded legacy cheque processing migration to micro-services, leading a team of 4 developers."
  },
  {
    id: "4",
    title: "Developer Intern",
    company: "Mahindra & Mahindra Pvt. Ltd, India",
    dateRange: "November 2018 - March 2019",
    description: "Architected a sentiment analysis pipeline implementing NLP and Artificial Intelligence with VADER on social media data, enabling informed strategic decisions for brand sentiment metrics."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Sum-It-AI Document Summarizer",
    description: "AI-powered enterprise document processing platform with LLM integration, chatbot functionality, and contextual summarization. Deployed on AWS with real-time document querying capabilities.",
    technologies: ["React.js", "Express.js", "AWS (Amplify, AppRunner, RDS)", "PostgreSQL", "GPT-3.5-turbo", "Qdrant"]
  },
  {
    id: "2",
    title: "FlavorFinder - Restaurant Discovery Platform",
    description: "Modern restaurant discovery platform with advanced search capabilities, user authentication, review system, and detailed restaurant information. Built for CMPE-202 coursework.",
    technologies: ["React", "TypeScript", "Spring Boot", "Java 17", "MySQL", "AWS (EC2, RDS, S3)", "Material-UI"]
  },
  {
    id: "3",
    title: "San Jose Crash Data Analytics",
    description: "Traffic crash data visualization platform with React web app and Streamlit dashboard for analyzing crash trends, locations, and contributing factors in San Jose, California.",
    technologies: ["React", "TypeScript", "Python", "Streamlit", "Data Visualization", "Geospatial Analysis"]
  },
  {
    id: "4",
    title: "AI-Powered PDF Financial Data Mining",
    description: "Collaborative AI tool for automated mining and analysis of large PDF financial documents with semantic search, Q&A capabilities, and multi-language translation. Built as team project with 3 contributors.",
    technologies: ["Python", "OpenAI", "FAISS", "Streamlit", "Hugging Face", "NLP", "Semantic Search"]
  },
  {
    id: "5",
    title: "WebScout - Web Intelligence Tool",
    description: "Python-based web intelligence and data extraction tool for automated web scraping and data analysis with advanced search capabilities.",
    technologies: ["Python", "Web Scraping", "Data Analysis", "Automation"]
  }
];

export const CONTACT: ContactInfo = {
  email: "shan.joshi2504@gmail.com",
  linkedin: "https://www.linkedin.com/in/shantanujoshi25",
  github: "https://github.com/shantanujoshi25"
};

export const EDUCATION = [
  {
    id: "1",
    degree: "M.S., Software Engineering",
    school: "San Jose State University, California",
    dateRange: "August 2024 - May 2026",
    gpa: "3.56 / 4.00"
  },
  {
    id: "2",
    degree: "B.E., Computer Engineering",
    school: "St. Vincent Pallotti College of Engineering, India",
    dateRange: "August 2016 - May 2020",
    gpa: ""
  }
];

export const CERTIFICATIONS = [
  "NSD Certification in Penetration Testing & Vulnerability Analysis (ISAC)",
  "200+ DSA Problems: Systematic practice across Arrays, Trees, DP, Graphs, System Design",
  "Led hackathon team to win Cybersecurity Prize @SJSU for community-based application",
  "Launched weekly tech presentations on API/microservices for junior developers at TCS"
];