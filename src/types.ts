export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  period: string;
  highlights: string[];
  category: 'Full-Stack' | 'Frontend' | 'Other';
  image: string;
  githubUrl: string;
  demoUrl?: string;
  architecture?: string[];
  challenges?: string;
  solutions?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export const RESUME_DATA = {
  name: "Sujal Shah",
  title: "MERN Stack Developer & Full-Stack Engineer",
  tagline: "Building resilient, pixel-perfect, and highly scalable digital ecosystems.",
  location: "Surat, Gujarat, India",
  email: "shahsujal14@gmail.com",
  phone: "+91 63548 19708",
  linkedin: "https://linkedin.com/in/sujal-shah-techno",
  github: "https://github.com/Sujalshah20",
  bio: "Motivated and detail-oriented BCA graduate currently pursuing a Master of Science in Information Technology (MSc IT), with hands-on industry experience as a MERN Stack Developer at Brainybeam Info-Tech Pvt. Ltd. Proficient in building responsive, user-centric web applications using React.js, Node.js, Express.js, and MongoDB. Passionate about problem-solving, continuous learning, and delivering scalable, enterprise-grade solutions.",
  
  skills: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frontend Technologies",
      icon: "Monitor",
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive UI Design", "Component Architecture"]
    },
    {
      title: "Backend Technologies",
      icon: "Server",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Server-Side Rendering"]
    },
    {
      title: "Databases & Storage",
      icon: "Database",
      skills: ["MongoDB", "MySQL", "Database Design"]
    },
    {
      title: "Tools & Platforms",
      icon: "Cpu",
      skills: ["Git", "GitHub", "Visual Studio Code", "AWS Cloud Sandbox"]
    },
    {
      title: "Concepts & Practices",
      icon: "Layers",
      skills: ["Agile Methodology", "CRUD Operations", "MVC Architecture", "Clean Code System", "Version Control"]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: "exp-1",
      company: "Brainybeam Info-Tech Pvt. Ltd.",
      role: "MERN Stack Developer",
      location: "Ahmedabad, Gujarat, India",
      period: "December 2025 – Present",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      highlights: [
        "Developing and maintaining full-stack web applications using the MERN stack with strict focus on responsive screen scaling.",
        "Collaborating with the design and backend teams to orchestrate secure RESTful endpoints and integrate components seamlessly.",
        "Building highly responsive, modern, and accessible user interface elements adhering to clean coding conventions.",
        "Participating actively in code reviews, collaborative pair programming, and Agile developmental sprints to optimize workflow delivery."
      ]
    }
  ] as WorkExperience[],

  education: [
    {
      id: "edu-1",
      institution: "Atmiya Institute of Technology & Science",
      degree: "Master of Science in Information Technology (MSc IT)",
      location: "Rajkot, Gujarat",
      period: "August 2024 – Present"
    },
    {
      id: "edu-2",
      institution: "Bhagwan Mahavir University",
      degree: "Bachelor of Computer Applications (BCA)",
      location: "Surat, Gujarat",
      period: "2021 – 2024"
    }
  ] as Education[],

  projects: [
    {
      id: "project-shield-pro",
      title: "Shield Pro",
      tagline: "Insurance Management System",
      description: "A secure, role-based corporate insurance management ecosystem featuring administrative control, intermediary support, and customer channels.",
      longDescription: "Shield Pro is a full-stack, enterprise-grade insurance management platform that handles complex lifecycle flows from registration to payouts. It introduces dedicated dashboards with role-based access controls (RBAC) to segment features between administrators (oversight), brokers/agents (sales and commission metrics), and policyholders (payment status, claims tracking). Built to handle clean document statuses and policy configurations.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Recharts"],
      role: "Lead Full-Stack Developer",
      period: "August 2024 – November 2024",
      category: "Full-Stack",
      image: "https://picsum.photos/seed/shield-pro-preview/800/600",
      githubUrl: "https://github.com/Sujalshah20",
      architecture: [
        "React SPA with context-driven security architecture.",
        "Express.js REST API with modular mid-tier validations.",
        "MongoDB schema with indexed queries for quick customer search.",
        "Tailwind-designed clean tables and graphs with live tracking."
      ],
      challenges: "Managing access privileges transparently across three highly distinctive user groups (Admin, Agent, Customer) while preventing authorization bypasses.",
      solutions: "Implemented JWT authentication combined with strict server-side middleware validation checkpoints that double-check user profiles against specific collections before serving resources.",
      highlights: [
        "Engineered end-to-end policy lifecycle workflows including request approvals, policy renewals, and direct digital claims logging.",
        "Built separate responsive, information-dense dashboards highlighting data graphs using dynamic visualization tools.",
        "Engineered strict validation schemas for personal and corporate details protection."
      ]
    },
    {
      id: "project-employee-mgmt",
      title: "Employee Hub",
      tagline: "Employee Management Engine",
      description: "An intuitive full-stack dashboard system enabling real-time human resources tracking, shift scheduling, and record handling.",
      longDescription: "An internal corporate operations tracking engine designed to transition offline tracking sheets to a centralized repository. Built using the MERN stack, the application simplifies employee tracking, contact coordination, performance records, and department categorization through an elegant, low-latency React administrative interface.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful Routing"],
      role: "Full-Stack Developer",
      period: "January 2024 – March 2024",
      category: "Full-Stack",
      image: "https://picsum.photos/seed/employee-hub-preview/800/600",
      githubUrl: "https://github.com/Sujalshah20",
      architecture: [
        "Vite-optimized React SPA.",
        "Express server using sub-routers grouped by resource paths.",
        "MongoDB modeling representing organization hierarchy."
      ],
      challenges: "Eliminating table lagging and visual stutter when processing extensive worker lists and database queries.",
      solutions: "Introduced structural component caching, server-side data pagination, and light pre-filtered database pipelines to load critical profiles on demand.",
      highlights: [
        "Designed and structured clean MongoDB collections utilizing sub-documents for relational work structures.",
        "Created an intuitive CRUD console for seamless modifications without requiring hard page refreshes.",
        "Implemented high-quality CSV report exporters and live text search parameters."
      ]
    },
    {
      id: "project-universal-tours",
      title: "Universal Tours",
      tagline: "Travel Booking Platform",
      description: "A highly responsive customer-facing travel booking catalog allowing users to reserve flights, hotels, and holiday itineraries.",
      longDescription: "Universal Tours & Travel is a responsive customer portal built on a robust PHP/MySQL infrastructure. It includes user account registration, dynamic query databases with filters by city and pricing, automated package receipts, and an operational administration center that allows booking managers to update offers and schedules.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      role: "Full-Stack Developer",
      period: "September 2023 – December 2023",
      category: "Other",
      image: "https://picsum.photos/seed/universal-tours-preview/800/600",
      githubUrl: "https://github.com/Sujalshah20",
      architecture: [
        "Dynamic server-rendered PHP templates.",
        "Relational MySQL database tracking flights, bookings, and users.",
        "Session-based client states and strict SQL escape checks."
      ],
      challenges: "Preventing seat double-bookings during spikes in customer activity.",
      solutions: "Instituted transaction lock operations in MySQL queries, validating slot availability right up to final ticket commitment.",
      highlights: [
        "Built responsive travel guides, image grids, and flight selectors scaling cleanly from screen sizes.",
        "Created a custom admin control board for automated travel listing modifications and ticket updates.",
        "Engineered session routing for verified profile views."
      ]
    }
  ] as Project[],

  certifications: [
    {
      id: "cert-aws",
      title: "AWS Cloud Practitioner Certification",
      issuer: "Amazon Web Services (AWS)",
      description: "Validated fundamental cloud infrastructure knowledge, security protocols, core services, pricing models, and deployment setups."
    },
    {
      id: "cert-prompt",
      title: "Prompt Engineering for ChatGPT",
      issuer: "AI / LLM Best Practices Course",
      description: "Mastered strategic input configurations, few-shot prompting patterns, and logical chain optimization for LLMs."
    },
    {
      id: "cert-web",
      title: "Web Development Certification",
      issuer: "Tech Academy Standards",
      description: "Comprehensive coursework on modern frontend interfaces, database design principles, and responsive software patterns."
    }
  ] as Certification[]
};
