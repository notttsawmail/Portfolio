/**
 * PORTFOLIO DATA CONFIGURATION
 * ----------------------------
 * This file contains all the text and information shown on your website.
 * To change anything on the site, just edit the text inside the quotes below!
 */

export const portfolioData = {
  // 1. PERSONAL INFORMATION
  // Change your name, title, and bio here
  personal: {
    name: "Shamel Rai",
    initials: "SR", // Shown in the "About Me" profile circle
    title: "Full Stack Junior Developer",
    location: "Thasikhel, Lalitpur",
    bio: "Full Stack Junior Developer specializing in building scalable systems and user-friendly applications. Focused on Backend and Flutter development with a commitment to technical excellence.",
    quote: "Growing into a skilled developer capable of building scalable systems.",
    
    // These stats appear in the boxes on the About page
    stats: [
      { label: "Experience", value: "Junior" },
      { label: "Focus", value: "Backend" },
      { label: "Learning", value: "Flutter" },
      { label: "Location", value: "Lalitpur" }
    ],
    
    // Use this list for things you are currently learning or interested in
    exploring: ["Flutter", "NestJS", "Linux",]
  },

  // 2. PROJECTS
  // Add or remove projects here. Each project needs an id, name, tagline, and details.
  projects: [
    // {
    //   id: "novapay",
    //   name: "NovaPay",
    //   tagline: "Next-gen payment infrastructure",
    //   emoji: "💳", // Use any emoji you like!
    //   stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
    //   description: "A robust and scalable payment processing platform designed for modern enterprises. Features include real-time fraud detection, multi-currency support, and seamless developer APIs.",
    //   featured: true
    // },
    // {
    //   id: "orbits",
    //   name: "Orbits",
    //   tagline: "Real-time team collaboration",
    //   emoji: "🪐",
    //   stack: ["React", "TypeScript", "WebSockets", "Prisma", "OpenAI", "Vercel"],
    //   description: "A spatial collaboration tool that brings teams together in a virtual environment. Uses WebSockets for low-latency interactions and AI to summarize meeting notes and action items.",
    //   featured: true
    // }

    {
      id: "tbc",
      name: "To Be Continued...",
      tagline: "More amazing work on the way",
      emoji: "🚀",
      stack: ["Next.js", "Flutter", "NestJS"],
      description: "Stay tuned for more projects and innovations coming soon.",
      featured: false
    }
  ],

  // 3. SKILLS
  // Group your skills into categories. These appear in the "Skills" app.
  skills: {
    "Programming Languages": ["Dart", "JavaScript"],
    "Frameworks": ["Flutter", "Express", "NestJS"],
    "Database": ["MongoDB", "SQL", "Prisma"],
    "Version Control": ["Git", "Github"]
  },

  // 4. PROFESSIONAL EXPERIENCE
  // Your work history, listed from newest to oldest.
  experience: [
    {
      company: "ARForgeTech",
      role: "Full Stack Junior Developer",
      date: "Mar 2026–Present",
      description: "Working as a Junior Developer focusing on both frontend and backend systems.",
      stack: ["React", "NestJS", "Flutter", "Clean Architecture"]
    },
    {
      company: "ARForgeTech",
      role: "Backend Intern",
      date: "Dec 2025–Mar 2026",
      description: "Developed and maintained backend APIs using NestJS. Structured application using modules, controllers, services, and DTO validation. Integrated environment configuration and middleware for logging.",
      stack: ["NestJS", "JWT", "Clean Architecture", "REST API", "DTO"]
    },
    {
      company: "Fantastic Story Studio",
      role: "Backend Intern",
      date: "Aug 2024–Nov 2024",
      description: "Developed and optimized RESTful APIs using Node.js and Express. Designed and managed MongoDB databases. Improved application reliability by identifying and resolving backend issues.",
      stack: ["Node.js", "Express", "MongoDB", "JWT"]
    },
    {
      company: "CloudFactory",
      role: "Video Analyst",
      date: "Nov 2021–Mar 2022",
      description: "Reviewed and analyzed video content to extract key insights and improve quality. Identified trends and patterns to enhance content categorization.",
      stack: ["Video Analysis", "Data Processing"]
    }
  ],

  // 5. EDUCATION
  // Your degree and college information.
  education: {
    school: "Islington College",
    degree: "Bsc (Hons) Computing",
    date: "Feb 2022–Dec 2025",
    honors: "Kamalpokhari, Kathmandu",
    gpa: "" // Leave blank if you don't want to show it
  },

  // 6. CERTIFICATIONS
  // Any professional certificates or courses you've completed.
  certificates: [
    { name: "AWS Academy Graduate - AWS Academy Data Engineering" },
    { name: "AWS Academy Graduate - AWS Academy Machine Learning Learning for Natural Language Processing" },
    { name: "Meta Programming Fundamentals in Kotlin" },
    { name: "Meta Version Control" },
    { name: "AWS Academy Graduate - AWS Academy Cloud Foundations" },
    { name: "AWS Academy Graduate - AWS Academy Machine Learning Learning Foundations" },
    { name: "Code Institute 5-Day Coding Challenge" }
  ],

  // 7. CONTACT & SOCIALS
  // Used in the "Contact" app and across the site.
  contact: {
    email: "shamel.rai@gmail.com",
    phone: "+977 9813663550",
    github: "github.com/notttsawmail",
    linkedin: "linkedin.com/in/shamelrai",
    cvPath: "/resume.pdf"
  }
};
