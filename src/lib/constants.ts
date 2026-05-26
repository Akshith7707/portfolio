export const PERSONAL = {
  name: "Akshith Reddy Ponna",
  firstName: "Akshith",
  title: "Full-Stack Developer | AI Product Builder | System Design Enthusiast",
  location: "Hyderabad, Telangana, India",
  email: "akshith7707@gmail.com",
  phone: "+91 9951199765",
  domain: "itsakshith.dev",
  summary:
    "Full-stack developer focused on AI-enabled products, scalable web platforms, and automation workflows.",
  education: {
    degree: "B.E Computer Science & Information Technology",
    college: "MVSR Engineering College",
    cgpa: "8.65",
  },
  social: {
    linkedin: "https://linkedin.com/in/akshith-reddy",
    twitter: "https://x.com/AkshithReddy07",
    leetcode: "https://leetcode.com/u/user3868OK/",
    github: "https://github.com/Akshith7707",
    email: "mailto:akshith7707@gmail.com",
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Coding", href: "#coding" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  languages: [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C", icon: "⚙️" },
    { name: "C++", icon: "🔧" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "🔷" },
  ],
  frontend: [
    { name: "HTML", icon: "🧱" },
    { name: "CSS", icon: "🎯" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚏" },
    { name: "FastAPI", icon: "⚡" },
    { name: "REST APIs", icon: "🔗" },
    { name: "JWT Auth", icon: "🔐" },
  ],
  databases: [
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Supabase", icon: "🟩" },
    { name: "ChromaDB", icon: "🧠" },
  ],
  aiml: [
    { name: "OpenAI", icon: "✨" },
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Jupyter", icon: "📓" },
    { name: "ML Workflows", icon: "🤖" },
  ],
  tools: [
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "💻" },
    { name: "Expo", icon: "📱" },
  ],
};

export const PROJECTS = [
  {
    id: "skillsync-ai",
    title: "SkillSync AI",
    tagline: "AI-powered job matching and ATS optimization",
    description:
      "Developed AI-driven hiring platform with resume parsing, GitHub profile analysis, LLM-powered skill extraction, cover letter generation, and ATS feedback flows.",
    features: [
      "Resume parsing and GitHub profile intelligence",
      "LLM-based skill extraction and matching",
      "Automated cover letter generation",
      "ATS feedback and profile improvement loop",
      "Recruiter-candidate pipeline workflows",
    ],
    techStack: ["Next.js", "Express.js", "PostgreSQL", "JWT", "OpenAI API"],
    architecture: {
      frontend: "Next.js app with role-aware candidate and recruiter views",
      backend: "Express.js REST APIs with JWT-protected routes",
      aiLayer: "LLM pipelines for extraction, scoring, and content generation",
      database: "PostgreSQL relational schema for candidates, jobs, and matches",
      analytics: "Matching confidence and profile quality metrics",
      personalization: "Skill-gap recommendations from ATS feedback",
    },
    challenges: [
      "Balanced extraction accuracy with latency in real-time workflows",
      "Designed secure auth model across multi-role hiring journeys",
      "Built scalable matching APIs for growing recruiter queries",
    ],
    color: "blue",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "talentflow-ai",
    title: "TalentFlow AI",
    tagline: "Interview automation with recruiter analytics",
    description:
      "Built AI recruitment platform for automated voice interviews, resume screening, candidate scoring, and analytics dashboards to accelerate shortlisting.",
    features: [
      "Automated voice interview workflows",
      "Resume screening and candidate ranking",
      "LLM-driven evaluation with structured feedback",
      "Recruiter analytics dashboards",
      "End-to-end shortlisting acceleration",
    ],
    techStack: ["React", "FastAPI", "MongoDB", "OpenAI"],
    architecture: {
      frontend: "React dashboard for recruiters and process monitoring",
      backend: "FastAPI services for interview orchestration and scoring",
      aiLayer: "OpenAI evaluation flows with rubric-based reasoning",
      database: "MongoDB for flexible candidate and interview records",
      analytics: "Scorecards and funnel performance dashboards",
      personalization: "Role-specific interview and evaluation templates",
    },
    challenges: [
      "Engineered reliable scoring consistency across varied responses",
      "Designed clear recruiter-facing analytics from unstructured interviews",
      "Reduced manual screening effort without losing decision quality",
    ],
    color: "purple",
    gradient: "from-purple-500/20 to-cyan-500/20",
  },
  {
    id: "schedulai",
    title: "SchedulAI",
    tagline: "WhatsApp AI appointment booking assistant",
    description:
      "Developed WhatsApp-based assistant for appointment booking, reminders, and admin-side availability management to reduce manual scheduling operations.",
    features: [
      "Conversational booking on WhatsApp",
      "Automated reminders and scheduling updates",
      "Admin panel for availability controls",
      "Notification workflows and analytics",
      "Reliable slot conflict prevention",
    ],
    techStack: ["Node.js", "PostgreSQL", "OpenAI", "REST APIs"],
    architecture: {
      frontend: "Admin interface for slots, bookings, and reports",
      backend: "Node.js scheduler service with booking APIs",
      aiLayer: "OpenAI intent parsing for booking and rescheduling",
      database: "PostgreSQL booking calendar and transaction-safe updates",
      analytics: "Booking volume and reminder performance tracking",
      personalization: "Business rule-based availability policies",
    },
    challenges: [
      "Handled scheduling conflicts across concurrent booking requests",
      "Built reliable reminder flows with minimal missed appointments",
      "Kept natural conversation UX while preserving strict booking logic",
    ],
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "leadgen-scraper",
    title: "LeadGen Scraper",
    tagline: "Business lead extraction and dataset generation",
    description:
      "Built Google Maps scraping pipeline to extract contacts, ratings, and location intelligence with export-ready structured datasets for outreach and research teams.",
    features: [
      "Automated Google Maps data extraction",
      "Structured lead datasets with quality fields",
      "Contact, rating, and location enrichment",
      "Export-ready outputs for outreach teams",
      "Repeatable scraping workflows for market research",
    ],
    techStack: ["Python", "Web Automation", "Pandas", "CSV Pipelines"],
    architecture: {
      frontend: "Config-driven CLI and scripted execution flow",
      backend: "Python scraping and transformation modules",
      aiLayer: "Pattern cleanup and dedupe heuristics",
      database: "File-based structured datasets for analytics pipelines",
      analytics: "Lead quality checks and extraction success metrics",
      personalization: "Region/category-specific scraping parameters",
    },
    challenges: [
      "Maintained extraction quality across changing source layouts",
      "Optimized runs for stable throughput on large lead sets",
      "Designed reusable pipeline for multiple verticals and regions",
    ],
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "ai-skill-training",
    title: "AI-Powered Remote Skill Training",
    tagline: "Intelligent adaptive learning at scale",
    description:
      "An AI-driven remote learning platform leveraging LLMs and adaptive learning systems to personalize educational experiences based on user performance and learning patterns.",
    features: [
      "Personalized learning paths powered by AI",
      "AI-powered chat assistant for real-time help",
      "Adaptive quizzes that adjust to skill level",
      "Interactive lecture support system",
      "Intelligent progress tracking & analytics",
    ],
    techStack: ["React", "Node.js", "Python", "MongoDB", "OpenAI API", "TensorFlow"],
    architecture: {
      frontend: "React with responsive UI components",
      backend: "Node.js REST API with Express",
      aiLayer: "Python ML service with LLM integration",
      database: "MongoDB for flexible data modeling",
      analytics: "Real-time learning analytics pipeline",
      personalization: "Adaptive algorithm engine",
    },
    challenges: [
      "Designed a scalable personalization engine that adapts in real-time",
      "Built efficient data pipelines for learning analytics",
      "Integrated LLMs for contextual educational assistance",
    ],
    color: "blue",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "web-automation",
    title: "Web Automation for Result Collection",
    tagline: "Automated data extraction at scale",
    description:
      "Automated extraction and collection of student results from university portals using Selenium automation, reducing manual effort by 95%.",
    features: [
      "Browser automation with Selenium WebDriver",
      "Intelligent result scraping & parsing",
      "Automated workflow execution",
      "Robust data extraction pipelines",
      "Error handling & retry mechanisms",
    ],
    techStack: ["Python", "Selenium", "BeautifulSoup", "Pandas", "PostgreSQL"],
    architecture: {
      frontend: "CLI-based interface",
      backend: "Python automation scripts",
      aiLayer: "Pattern recognition for data extraction",
      database: "PostgreSQL for structured storage",
      analytics: "Pandas data processing",
      personalization: "Configurable scraping rules",
    },
    challenges: [
      "Handled dynamic page loading and anti-bot measures",
      "Built resilient scraping with retry logic",
      "Designed efficient batch processing for 1000+ records",
    ],
    color: "purple",
    gradient: "from-purple-500/20 to-cyan-500/20",
  },
  {
    id: "ecommerce-cart",
    title: "E-Commerce Shopping Cart",
    tagline: "Full-stack commerce experience",
    description:
      "A full-stack e-commerce shopping experience with dynamic cart functionality, secure payment workflows, and responsive design.",
    features: [
      "Dynamic product catalog & listings",
      "Real-time cart updates & management",
      "Responsive design across all devices",
      "Quantity adjustments & price calculation",
      "Secure payment integration",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    architecture: {
      frontend: "React SPA with Tailwind CSS",
      backend: "Express.js REST API",
      aiLayer: "Product recommendation engine",
      database: "MongoDB with Mongoose ODM",
      analytics: "Order tracking system",
      personalization: "User preference engine",
    },
    challenges: [
      "Implemented real-time cart state management",
      "Built secure payment flow with Stripe",
      "Optimized product queries for fast loading",
    ],
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AI/ML Certification",
    issuer: "AICTE + Eduskills",
    description: "Comprehensive certification covering machine learning algorithms, neural networks, and AI applications in real-world scenarios.",
    icon: "🤖",
    color: "blue",
  },
  {
    title: "Full Stack Web Development",
    issuer: "PWSkills",
    description: "End-to-end web development covering frontend, backend, databases, and deployment strategies.",
    icon: "🌐",
    color: "purple",
  },
  {
    title: "DSA Certification",
    issuer: "GeeksforGeeks",
    description: "Data structures and algorithms mastery covering advanced problem-solving techniques and optimization.",
    icon: "📊",
    color: "cyan",
  },
];

export const EXPERIENCE = [
  {
    title: "Full-Stack E-Commerce Platform",
    role: "Freelance Developer",
    duration: "Apr 2026 - Present",
    location: "Remote",
    points: [
      "Building production-grade Indian e-commerce platform for sarees, dresses, and gold jewellery.",
      "Designed customer storefront, web admin dashboard, and mobile app for admins and employees.",
      "Implemented role-based access control for admin, employee, and customer workflows.",
      "Built secure order processing with server-side validation and Supabase-backed REST APIs.",
    ],
  },
];

export const ACHIEVEMENTS = [
  "Participated in hackathons and collaborative software development projects.",
  "Contributed to ASTRA Tech Club through technical events, coding competitions, and workshops.",
  "Organized DevLoop web development bootcamp covering HTML, CSS, Flask, SQL, and PythonAnywhere deployment.",
];

export const CURRENT_FOCUS = [
  {
    title: "Data Structures & Algorithms",
    description: "Mastering advanced DSA patterns for competitive programming and interview preparation",
    icon: "🧮",
    progress: 75,
  },
  {
    title: "System Design",
    description: "Learning scalable architecture patterns, distributed systems, and infrastructure design",
    icon: "🏗️",
    progress: 45,
  },
  {
    title: "AI Engineering",
    description: "Building intelligent systems with LLMs, ML pipelines, and AI-powered applications",
    icon: "🤖",
    progress: 60,
  },
  {
    title: "Full Stack Development",
    description: "Crafting production-grade applications with modern frameworks and best practices",
    icon: "⚡",
    progress: 70,
  },
  {
    title: "Open Source",
    description: "Contributing to impactful open source projects and building community tools",
    icon: "🌍",
    progress: 35,
  },
  {
    title: "Scalable Projects",
    description: "Engineering systems designed for growth, reliability, and real-world impact",
    icon: "🚀",
    progress: 55,
  },
];

export const FLOATING_BADGES = [
  "Python",
  "React",
  "AI/ML",
  "System Design",
  "Next.js",
  "FastAPI",
  "MongoDB",
  "TypeScript",
];
