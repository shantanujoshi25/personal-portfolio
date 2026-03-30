import { Project, Experience, Skill, ContactInfo } from '../types';

export const PERSONAL_INFO = {
  name: "Shantanu Joshi",
  tagline: "AI & Full-Stack Engineer | 3+ Years Experience | Java, Python, React Expertise",
  location: "San Jose, CA",
  phone: "+1 (669)-336-9774",
  email: "shan.joshi2504@gmail.com",
  professionalSummary: `AI & full-stack engineer with 3+ years building production systems and AI-powered platforms across microservices, REST APIs, RAG pipelines, and multi-agent orchestration. Delivered backend infrastructure serving 200K+ banking customers and shipped LLM integrations processing thousands of evaluations monthly. M.S. Software Engineering at SJSU, graduating May 2026.`,
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
    id: "13",
    title: "RecruiTech - AI Technical Recruitment Platform",
    description: "AI-powered recruitment platform that automates candidate screening through a 6-task Airflow DAG running 3 parallel AI agents (ATS resume scorer, GitHub analyzer via GraphQL API, LeetCode stats analyzer). Features weighted scoring with CrewAI synthesis producing 8-dimension candidate evaluations, real-time AI interviews using WebSockets and WebRTC with Whisper transcription and GPT-4o dynamic question generation, plus role-based flows for candidates and recruiters with Google OAuth. In progress — expected April 2026.",
    technologies: ["Python", "OpenAI (GPT-4o, Whisper)", "CrewAI", "Apache Airflow", "Apollo GraphQL", "React", "Node.js", "MongoDB", "Kafka", "AWS S3", "WebRTC"],
    github: "https://github.com/shantanujoshi25/RecruiTech"
  },
  {
    id: "14",
    title: "StackComply - AI Compliance Scanner",
    description: "AI-powered compliance scanner for GitHub repositories. Paste a repo URL and get a full compliance report in under a minute. Uses a 3-agent pipeline to detect sensitive data fields, map violations to regulations (GDPR, HIPAA, CCPA, PCI-DSS, SOC2), estimate non-compliance costs, and assign a compliance grade.",
    technologies: ["Next.js", "TypeScript", "OpenAI GPT-4o-mini", "Stack Auth", "GitHub API", "Tailwind CSS"],
    github: "https://github.com/shantanujoshi25/StackAuthHackathon"
  },
  {
    id: "1",
    title: "Bingo with Aliens",
    description: "Multiplayer bingo game built on the Alien mini-app platform. Top 5 finish at Alien Genesis Hackathon (Feb 2026, SF). Players join lobbies, pick numbers on a 3x3 grid, and compete for the pot with real-money buy-ins and verified users.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Redis", "Alien Bridge SDK", "Railway"],
    github: "https://github.com/shantanujoshi25/Bingo"
  },
  {
    id: "2",
    title: "RGB-Thermal Fusion Object Detection",
    description: "Deep learning research project comparing RGB-Thermal fusion strategies for object detection using YOLOv11n on the M3FD dataset. Built a GAN-based early fusion pipeline with U-Net generator and PatchGAN discriminator, achieving best mAP@50 of ~0.75.",
    technologies: ["Python", "PyTorch", "YOLOv11", "GANs", "U-Net", "PatchGAN", "Ultralytics", "Google Colab"],
    github: "https://github.com/shantanujoshi25/rgb-thermal-fusion-yolov11"
  },
  {
    id: "3",
    title: "Sum-It-AI Document Summarizer",
    description: "AI-powered enterprise document processing platform with LLM integration, chatbot functionality, and contextual summarization. Deployed on AWS with real-time document querying capabilities.",
    technologies: ["React.js", "Express.js", "AWS (Amplify, AppRunner, RDS)", "PostgreSQL", "GPT-3.5-turbo", "Qdrant"],
    link: "https://main.d19opk0v2645vf.amplifyapp.com/",
    github: "https://github.com/shantanujoshi25/Sum_It_AI"
  },
  {
    id: "4",
    title: "GitHub Profile Analyzer",
    description: "Kafka-based pipeline that analyzes GitHub profiles against job descriptions using AI agents. Features a CrewAI agent that fetches profile data via GitHub GraphQL API and evaluates candidate-job fit using GPT-4o, with a Strawberry + FastAPI GraphQL server.",
    technologies: ["Python", "Apache Kafka", "CrewAI", "OpenAI GPT-4o", "GitHub GraphQL API", "FastAPI", "Strawberry", "SQLite", "Docker"],
    github: "https://github.com/shantanujoshi25/github-analyzer"
  },
  {
    id: "5",
    title: "SnapTrip - AI Travel Planner",
    description: "AI-powered travel planning application that generates multi-day itineraries based on destination, dates, interests, trip pace, and accessibility preferences. Features a guided multi-step flow, local trip saving, PDF export, and light/dark themes.",
    technologies: ["React", "Material UI", "Framer Motion", "Node.js", "Express.js", "OpenAI API", "jsPDF"],
    github: "https://github.com/shantanujoshi25/SnapTrip"
  },
  {
    id: "6",
    title: "FlavorFinder - Restaurant Discovery Platform",
    description: "Modern restaurant discovery platform with advanced search capabilities, user authentication, review system, and detailed restaurant information. Built for CMPE-202 coursework.",
    technologies: ["React", "TypeScript", "Spring Boot", "Java 17", "MySQL", "AWS (EC2, RDS, S3)", "Material-UI"],
    github: "https://github.com/shantanujoshi25/restaurant-finder"
  },
  {
    id: "7",
    title: "AI-Powered PDF Financial Data Mining",
    description: "Collaborative AI tool for automated mining and analysis of large PDF financial documents with semantic search, Q&A capabilities, and multi-language translation. Built as team project with 3 contributors.",
    technologies: ["Python", "OpenAI", "FAISS", "Streamlit", "Hugging Face", "NLP", "Semantic Search"],
    github: "https://github.com/shantanujoshi25/255-pdf-data-mining"
  },
  {
    id: "8",
    title: "San Jose Crash Data Analytics",
    description: "Traffic crash data visualization platform with React web app and interactive Streamlit dashboard powered by Google BigQuery. Features top crash site mapping with Folium, hourly/daily heatmaps, seasonal trend analysis, and filterable Plotly visualizations for analyzing crash patterns in San Jose.",
    technologies: ["React", "TypeScript", "Python", "Streamlit", "Google BigQuery", "Plotly", "Folium", "Pandas", "Data Visualization"],
    github: "https://github.com/shantanujoshi25/SanJose_Crash"
  },
  {
    id: "9",
    title: "Software CPU Simulator",
    description: "16-bit software CPU simulator with a custom instruction set architecture, assembler, and execution environment. Features a full fetch-decode-execute cycle, ALU, memory-mapped I/O (UART & Timer), and segmented memory model with text, data, heap, and stack regions.",
    technologies: ["C", "Custom ISA", "Assembler", "Memory-Mapped I/O", "Makefile"],
    github: "https://github.com/shantanujoshi25/SoftwareCPU"
  },
  {
    id: "10",
    title: "Lyft-BayWheels Campus Monitor Bot",
    description: "Real-time Discord bot that tracks Lyft BayWheels bike-share availability across SJSU campus stations. Features automated monitoring, availability alerts, and station status updates to help students plan their commute efficiently.",
    technologies: ["Python", "Discord.py", "REST APIs", "JSON", "Automated Scheduling"],
    github: "https://github.com/shantanujoshi25/Lyft-BayWheels-Discord-Bot"
  },
  {
    id: "11",
    title: "WebScout - Web Intelligence Tool",
    description: "Python-based web intelligence and data extraction tool for automated web scraping and data analysis with advanced search capabilities.",
    technologies: ["Python", "Web Scraping", "Data Analysis", "Automation"],
    github: "https://github.com/shantanujoshi25/webscout"
  },
  {
    id: "12",
    title: "COVID-19 Telegram Bot",
    description: "Telegram chatbot providing real-time COVID-19 statistics by country. Users send a country name for quick stats or use # prefix for detailed breakdowns including recovered, active, critical cases, and cases per million. Data scraped live from Worldometers.",
    technologies: ["Python", "Flask", "python-telegram-bot", "BeautifulSoup", "Requests", "Gunicorn", "Heroku"],
    github: "https://github.com/shantanujoshi25/covid19_TelegramBot"
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
    gpa: "3.64 / 4.00"
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