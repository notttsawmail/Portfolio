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
    name: "Shamel Rai Jr.",
    initials: "SR", // Shown in the "About Me" profile circle
    title: "Backend Developer",
    location: "Thasikhel, Lalitpur",
    bio: "Junior Full Stack Developer with experience in backend development using NestJS, Node.js, Express, MongoDB, SQL, and Prisma. Skilled in building RESTful APIs, implementing authentication, and structuring maintainable applications.",
    quote: "Eager to continue growing in backend and full stack development while contributing to scalable, high-quality software solutions.",
    
    // These stats appear in the boxes on the About page
    stats: [
      { label: "Experience", value: "Junior" },
      { label: "Focus", value: "Backend" },
      { label: "Learning", value: "Full Stack" },
      { label: "Location", value: "Lalitpur" }
    ],
    
    // Use this list for things you are currently learning or interested in
    exploring: ["Flutter", "NestJS", "Linux", "Data Engineering"]
  },

  // 2. PROJECTS
  // Add or remove projects here. Each project needs an id, name, tagline, and details.
  projects: [
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
    "Programming Languages": ["Dart", "JavaScript", "SQL"],
    "Framework & Libraries": ["Flutter", "Express", "NestJS"],
    "Database & ORM": ["MongoDB", "SQL", "Prisma"],
    "Tools": ["Git", "GitHub", "Postman"]
  },

  // 4. PROFESSIONAL EXPERIENCE
  // Your work history, listed from newest to oldest.
  experience: [
    {
      company: "ARForgeTech",
      role: "Full Stack Junior Developer",
      date: "Mar 2026–Present",
      description: "Developing and maintaining full stack web applications with a focus on backend services and API integration. Building scalable RESTful APIs and supporting frontend-backend connectivity.",
      stack: ["React", "NestJS", "Flutter", "REST API", "Full Stack"]
    },
    {
      company: "ARForgeTech",
      role: "Backend Intern",
      date: "Dec 2025–Mar 2026",
      description: "Developed and maintained backend APIs using NestJS. Designed RESTful endpoints for CRUD operations and business logic. Implemented JWT-based authentication and authorization.",
      stack: ["NestJS", "JWT", "Clean Architecture", "REST API", "DTO"]
    },
    {
      company: "Fantastic Story Studio",
      role: "Backend Intern",
      date: "Aug 2024–Nov 2024",
      description: "Developed and optimized RESTful APIs using Node.js and Express. Designed and managed MongoDB databases. Implemented JWT authentication to enhance security.",
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
    { name: "AWS Academy Graduate – AWS Academy Cloud Foundations" },
    { name: "AWS Academy Graduate – AWS Academy Data Engineering" },
    { name: "AWS Academy Graduate – AWS Academy Machine Learning for Natural Language Processing" },
    { name: "AWS Academy Graduate – AWS Academy Machine Learning Foundations" },
    { name: "Meta Programming Fundamentals in Kotlin" },
    { name: "Code Institute 5-Day Coding Challenge" },
    { name: "Meta Version Control" }
  ],

  // 7. CONTACT & SOCIALS
  // Used in the "Contact" app and across the site.
  contact: {
    email: "shamel.rai@gmail.com",
    phone: "+977 9813663550",
    github: "github.com/notttsawmail",
    linkedin: "linkedin.com/in/shamelrai",

    cvPath: "/Shamel_Rai_Resume.pdf"
  }
};
