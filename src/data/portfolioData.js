import imgCareerNav from '../assets/projects/ai_career_navigator.png';
import imgEchoMind from '../assets/projects/echomind.png';
import imgRecruitVal from '../assets/projects/ihmcl_auto_recruit.png';
import imgCrimeVision from '../assets/projects/crimevision_ai.png';

export const portfolioData = {
  personal: {
    name: "Sanjana Dwivedi",
    logoText: "Sanjana",
    role: "AI Engineer",
    typewriterTexts: [
      "Building Intelligent AI Applications",
      "LLM Engineer",
      "GenAI Developer",
      "RAG Systems",
      "AI Agents",
      "FastAPI Developer"
    ],
    shortDescription: "I build production-ready AI applications powered by Large Language Models, Retrieval-Augmented Generation (RAG), AI Agents, and scalable backend systems. Passionate about transforming ideas into intelligent products that solve real-world problems.",
    email: "sanjanadwivedi574@gmail.com",
    linkedin: "https://linkedin.com/in/sanjanadwivedi",
    github: "https://github.com/sanjanadwivedi",
    location: "Delhi, India"
  },
  hero: {
    greetingPrefix: "Hi, I’m",
    name: "Sanjana Dwivedi",
    roleHighlight: "AI Engineer",
    ctaWork: "View My Work",
    ctaResume: "Download Resume",
  },
  about: {
    heading: "About Me",
    description: [
      "Hello! I'm Sanjana Dwivedi, an AI Engineer passionate about building intelligent software powered by Generative AI.",
      "My expertise lies in developing production-ready LLM applications, AI Agents, RAG systems, and scalable APIs using FastAPI and Python. I enjoy designing end-to-end AI products—from prompt engineering and retrieval pipelines to deployment and evaluation.",
      "I believe AI should be practical, reliable, and capable of solving meaningful real-world challenges."
    ]
  },
  stats: [
    { label: "Projects Completed", value: "8+" },
    { label: "Technologies", value: "25+" },
    { label: "AI Models Worked With", value: "OpenAI • Gemini • Ollama" },
    { label: "Focus", value: "LLMs • AI Agents • RAG" }
  ],
  skills: [
    {
      category: "AI & GenAI",
      items: [
        "OpenAI GPT", "Google Gemini", "LangChain", "LangGraph", "RAG", 
        "Prompt Engineering", "LLM Evaluation", "Vector Databases", 
        "Embeddings", "AI Agents", "Langfuse"
      ]
    },
    {
      category: "Backend",
      items: [
        "Python", "FastAPI", "Flask", "REST APIs", "SQLAlchemy", "JWT Authentication"
      ]
    },
    {
      category: "Frontend",
      items: [
        "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite"
      ]
    },
    {
      category: "Database",
      items: [
        "PostgreSQL", "MySQL", "SQL Server", "SQLite", "ChromaDB"
      ]
    },
    {
      category: "Machine Learning",
      items: [
        "Scikit-Learn", "XGBoost", "CatBoost", "Pandas", "NumPy", "Matplotlib"
      ]
    }
  ],
  projects: [
    {
      id: "ai-career-navigator",
      number: "01",
      title: "AI Career Navigator",
      badge: "AI Platform",
      image: imgCareerNav,
      liveUrl: "https://beam-jobs-nine.vercel.app",
      description: "An intelligent career platform that analyzes resumes, calculates ATS scores, recommends jobs, generates personalized learning roadmaps, and provides AI-powered career coaching using LLMs.",
      longDescription: "AI Career Navigator is an end-to-end intelligent platform designed to revolutionize career guidance. It extracts candidate skill profiles from resumes, performs deep semantic ATS matching against job descriptions, constructs dynamic step-by-step learning roadmaps, and provides automated AI career coaching using state-of-the-art LLMs.",
      keyFeatures: [
        "Automated ATS Score Calculation",
        "Personalized Skill & Learning Roadmaps",
        "AI Career Coaching Engine",
        "Semantic Job Recommendation Pipeline"
      ],
      technologies: ["React", "FastAPI", "OpenAI GPT", "Langfuse", "PostgreSQL"]
    },
    {
      id: "echomind",
      number: "02",
      title: "EchoMind",
      badge: "AI Memory System",
      image: imgEchoMind,
      liveUrl: "https://github.com/sanjanadwivedi/EchoMind",
      description: "An AI memory system that enables long-term contextual conversations using memory retrieval, embeddings, and personality-driven responses.",
      longDescription: "EchoMind is an advanced AI memory system built with FastAPI and PostgreSQL. It maintains long-term contextual continuity across user conversations by storing history as high-dimensional vector embeddings and retrieving context dynamically for personality-driven responses.",
      keyFeatures: [
        "Vector Memory Retrieval Pipeline",
        "Personality & Persona Configuration",
        "Long-Term Context Engine",
        "Embeddings Storage & Lookup"
      ],
      technologies: ["FastAPI", "PostgreSQL", "OpenAI", "Embeddings", "Memory Retrieval"]
    },
    {
      id: "ihmcl-auto-recruit",
      number: "03",
      title: "IHMCL Auto Recruit Validator",
      badge: "AI Recruitment",
      image: imgRecruitVal,
      liveUrl: "https://github.com/sanjanadwivedi/IHMCL-Auto-Recruit",
      description: "A multi-stage AI recruitment system that extracts job requirements, analyzes candidate resumes, verifies eligibility, and generates hiring recommendations using LLMs.",
      longDescription: "IHMCL Auto Recruit Validator streamlines candidate screening for enterprise hiring. It automatically parses multi-page resumes, matches candidate credentials against strict job requirements, evaluates eligibility, and generates unbiased hiring recommendations using Gemini LLM.",
      keyFeatures: [
        "Multi-Stage Resume Parser",
        "Job Requirement Extraction",
        "Automated Eligibility Verification",
        "LLM Recommendation Generator"
      ],
      technologies: ["FastAPI", "Gemini", "SQLite", "React"]
    },
    {
      id: "crimevision-ai",
      number: "04",
      title: "CrimeVision AI",
      badge: "Crime Analytics",
      image: imgCrimeVision,
      liveUrl: "https://crimevision-ai-website-k08ht18t6-sanjanas-projects-90598b04.vercel.app",
      description: "An AI-powered crime analytics platform that visualizes crime trends, predicts future patterns using machine learning, and provides interactive dashboards for better decision-making.",
      longDescription: "CrimeVision AI leverages machine learning to forecast crime patterns and provide actionable analytics for decision makers. Built with Python, XGBoost, and CatBoost, it transforms raw historical data into interactive predictive heatmaps and dashboards.",
      keyFeatures: [
        "Predictive Crime Trend Analytics",
        "Geospatial Heatmap Visualization",
        "XGBoost & CatBoost ML Models",
        "Streamlit & Power BI Dashboards"
      ],
      technologies: ["Python", "XGBoost", "CatBoost", "Streamlit", "Power BI"]
    }
  ],
  experience: {
    role: "AI Engineer",
    description: "Built production-ready AI applications using FastAPI, OpenAI GPT, Gemini, LangChain, and LangGraph. Developed scalable backend APIs, AI agents, RAG pipelines, and intelligent automation solutions with a focus on performance and real-world deployment."
  },
  education: {
    degree: "Bachelor of Science (Hons.) in Computer Science",
    institution: "Shaheed Rajguru College of Applied Sciences for Women",
    university: "University of Delhi",
    years: "2022 – 2026"
  },
  contact: {
    heading: "Let's Build Something Amazing Together",
    description: "I'm always excited to collaborate on AI, Machine Learning, and Generative AI projects. Whether you have an innovative idea, an exciting opportunity, or just want to connect, I'd love to hear from you.",
    email: "sanjanadwivedi574@gmail.com",
    linkedin: "https://linkedin.com/in/sanjanadwivedi",
    github: "https://github.com/sanjanadwivedi"
  },
  footer: {
    author: "Sanjana Dwivedi",
    credits: "Powered by React, FastAPI, OpenAI, and Creativity."
  },
  preloader: [
    "Initializing AI Systems...",
    "Loading Models...",
    "Preparing Intelligent Experiences...",
    "Welcome."
  ]
};
