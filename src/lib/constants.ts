export const PERSONAL = {
  name: "Akshith Reddy Ponna",
  firstName: "Akshith",
  title: "Software Engineer | AI Builder | System Design Enthusiast",
  location: "Hyderabad, India",
  email: "akshithreddy.ponna@gmail.com",
  domain: "itsakshith.dev",
  education: {
    degree: "B.E Computer Science & Information Technology",
    college: "MVSR Engineering College",
    cgpa: "8.66",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/akshith-reddy-2675ab202/",
    twitter: "https://x.com/AkshithReddy07",
    leetcode: "https://leetcode.com/u/user3868OK/",
    github: "https://github.com/akshithreddy",
    email: "mailto:akshithreddy.ponna@gmail.com",
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
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
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "REST APIs", icon: "🔗" },
  ],
  databases: [
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
  ],
  aiml: [
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Jupyter", icon: "📓" },
    { name: "ML Workflows", icon: "🤖" },
  ],
  tools: [
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "💻" },
    { name: "VMware", icon: "🖥️" },
  ],
};

export const PROJECTS = [
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
  "Docker",
  "MongoDB",
  "TypeScript",
];
