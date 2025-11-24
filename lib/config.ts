// Personal Information Configuration
// Update this file with your information, then the cards will automatically use it

export const personalInfo = {
  // Basic Info
  name: "Abhinav Raj",
  title: "CS & Business Systems Student | iOS Developer",
  tagline: "B.Tech student passionate about iOS development, UI/UX design, and building impactful technology solutions.",
  
  // Location
  city: "Chennai",
  country: "Tamil Nadu, India",
  
  // Contact
  email: "abhinavraj00001@gmail.com",
  github: "abbinavv",
  githubUrl: "https://github.com/abbinavv",
  linkedin: "abhinav-raj-a1979421b",
  linkedinUrl: "https://www.linkedin.com/in/abhinav-raj-a1979421b/",
  
  // Spotify (Optional - for static display)
  currentSong: {
    title: "Coding Playlist",
    artist: "Lo-fi Beats",
    album: "Focus Mode",
  },
  
  // Newsletter
  subscriberCount: 127, // Update this periodically
  
  // Social Media (Add more as needed)
  twitter: "@abhinavraj",
  twitterUrl: "https://twitter.com/abhinavraj",
};

// Project Information
export const projects = {
  arfurniture: {
    name: "AR Furniture App",
    description: "An iOS application prototype that enables users to visualize furniture in real-world spaces using augmented reality.",
    tags: ["Swift", "ARKit", "Storyboard", "Figma", "iOS"],
    githubUrl: "https://github.com/abbinavv/ar-furniture",
    liveUrl: null,
    featured: true,
  },
  
  carbonfootprint: {
    name: "Carbon Footprint Calculator",
    description: "A database-driven web application to estimate and analyze individual carbon footprints based on daily activities.",
    tags: ["Python", "Flask", "MySQL", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/abbinavv/carbon-footprint",
    liveUrl: null,
    featured: true,
  },
  
  cpuscheduler: {
    name: "CPU Scheduling Visualizer",
    description: "A web-based tool demonstrating CPU scheduling algorithms like SJF and Round Robin using interactive Gantt charts.",
    tags: ["JavaScript", "HTML", "CSS", "Data Visualization"],
    githubUrl: "https://github.com/abbinavv/cpu-scheduler",
    liveUrl: null,
    featured: true,
  },
  
  launchpad: {
    name: "Launchpad Club - TechLead",
    description: "Leading tech efforts at Launchpad, a student club supporting campus startups and investor networking.",
    tags: ["Leadership", "Startups", "Event Management", "Networking"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
};

// Theme Configuration
export const themeConfig = {
  defaultTheme: "light", // "light" or "dark"
  enableSystemTheme: true, // Follow system preference if no saved theme
};

// SEO Configuration
export const seoConfig = {
  title: "Abhinav Raj - CS Student & iOS Developer Portfolio",
  description: "B.Tech student in Computer Science and Business Systems specializing in iOS development, web development, and UI/UX design. Explore my projects and experience.",
  keywords: ["Abhinav Raj", "iOS developer", "Swift", "web development", "computer science", "SRM", "portfolio", "student developer"],
  author: "Abhinav Raj",
  siteUrl: "https://abhinavraj.com",
  ogImage: "/og-image.png", // Add your Open Graph image to public folder
};
