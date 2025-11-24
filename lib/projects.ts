export type ProjectCategory = "ios" | "web" | "tools";

export interface Project {
  slug: string;
  title: string;
  shortTagline: string;
  category: ProjectCategory;
  techStack: string[];
  timeline?: string;
  role: string;
  summary: string;
  overview: string[];
  keyFeatures: string[];
  learnings: string[];
  githubUrl?: string;
  liveUrl?: string;
  sortOrder?: number;
}

export const projects: Project[] = [
  {
    slug: "ar-furniture-app",
    title: "AR Furniture App",
    shortTagline: "iOS prototype to visualise furniture in real spaces.",
    category: "ios",
    techStack: ["Swift", "Storyboard", "UIKit", "Figma"],
    timeline: "2024 — Present",
    role: "Solo iOS developer & UI/UX designer",
    summary:
      "An iOS application prototype that enables users to preview furniture in their own rooms before buying. The app focuses on intuitive UI, clean visuals, and AR-inspired interactions, with planned ARKit integration for accurate placement.",
    overview: [
      "The AR Furniture App is an iOS prototype designed to help users visualise furniture in real-world spaces before purchasing. The goal is to reduce uncertainty in online furniture shopping by letting users see how an item might look and fit in their own rooms.",
      "The current version focuses on building an intuitive, responsive UI with smooth navigation between furniture items and room views. It uses Storyboard and UIKit for layout and interactions, while Figma is used to iterate quickly on UI/UX designs.",
      "Future iterations are planned to integrate ARKit so that users can place 3D models at scale in their environment, improving realism and decision-making."
    ],
    keyFeatures: [
      "Intuitive, touch-friendly UI designed with Figma and implemented in Swift.",
      "Interactive furniture browsing with clear categorisation and visual hierarchy.",
      "Room preview screens that simulate how selected furniture would look in context.",
      "Planned ARKit support for realistic, true-scale placement in the user's environment.",
      "Focus on smooth animations and transitions to keep the experience fluid."
    ],
    learnings: [
      "Bridging the gap between UI/UX prototyping in Figma and actual implementation in Swift/Storyboard.",
      "Designing interfaces that remain simple and understandable even as features grow.",
      "Planning for ARKit integration and understanding its constraints and capabilities.",
      "Thinking from a user's perspective in a high-stakes decision flow like furniture purchase."
    ],
    githubUrl: "https://github.com/abbinavv/ar-furniture-app",
    liveUrl: undefined,
    sortOrder: 1
  },
  {
    slug: "carbon-footprint-emission-calculator",
    title: "Carbon Footprint Emission Calculator",
    shortTagline: "Database-driven web app to estimate personal carbon footprints.",
    category: "web",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "Python", "Flask"],
    timeline: "2024",
    role: "Full-stack developer (solo)",
    summary:
      "A database-driven web application that helps users estimate and analyse their carbon footprint based on daily activities. It features a user-friendly interface, real-time calculations, and data visualisation for better awareness.",
    overview: [
      "The Carbon Footprint Emission Calculator is a full-stack web application that allows users to input details about their daily activities and get an estimated carbon footprint. It is built to raise awareness about personal environmental impact in a clear and approachable way.",
      "The backend uses Python (Flask) combined with a MySQL database to store and process user inputs. The frontend is built with HTML, CSS, and JavaScript to provide a responsive and accessible UI.",
      "Visual outputs and summaries help users see how different activities contribute to their total emissions, encouraging reflection and behaviour change."
    ],
    keyFeatures: [
      "User-friendly form to capture daily activities such as transport, electricity usage, and lifestyle habits.",
      "Real-time carbon footprint calculations based on configurable emission factors.",
      "Data visualisation components that summarise emissions in charts or breakdowns.",
      "Persistent storage of user inputs using a MySQL database for analysis over time.",
      "Clear separation of frontend (HTML/CSS/JS) and backend (Flask) responsibilities."
    ],
    learnings: [
      "Designing a clean, approachable UI for relatively complex and sensitive data.",
      "Working end-to-end with Flask, MySQL, and a custom frontend stack.",
      "Structuring database schemas for analytics and time-based comparisons.",
      "Translating domain logic (emission factors, units) into code in a maintainable way."
    ],
    githubUrl: "https://github.com/abbinavv/carbon-footprint-calculator",
    liveUrl: undefined,
    sortOrder: 2
  },
  {
    slug: "cpu-scheduling-visualizer",
    title: "CPU Scheduling Visualizer",
    shortTagline: "Interactive visualisation of CPU scheduling algorithms.",
    category: "tools",
    techStack: ["JavaScript", "HTML", "CSS"],
    timeline: "2023",
    role: "Frontend developer & visual designer",
    summary:
      "A web-based tool to demonstrate CPU scheduling algorithms such as Shortest Job First (SJF) and Round Robin using interactive Gantt charts and visual timelines.",
    overview: [
      "The CPU Scheduling Visualizer is an educational web tool built to help students understand how different CPU scheduling algorithms behave with various process inputs.",
      "Users can define processes (arrival time, burst time, etc.) and then run algorithms like Shortest Job First (SJF) and Round Robin to see how the CPU timeline evolves.",
      "The application renders interactive Gantt charts to show which process runs at each time slice, making abstract scheduling concepts much easier to grasp visually."
    ],
    keyFeatures: [
      "Support for key CPU scheduling algorithms such as SJF and Round Robin.",
      "Dynamic process input: users can add, edit, or remove processes before running the simulation.",
      "Interactive Gantt chart visualisation showing time slices and process execution order.",
      "Clear breakdown of waiting time, turnaround time, and other relevant metrics.",
      "Fully front-end implementation using JavaScript, HTML, and CSS."
    ],
    learnings: [
      "Translating textbook scheduling algorithms into interactive, visual simulations.",
      "Managing state and user input cleanly in a client-side JavaScript application.",
      "Designing Gantt chart visuals that remain readable as data complexity increases.",
      "Reinforcing understanding of OS concepts by implementing them from scratch."
    ],
    githubUrl: "https://github.com/abbinavv/cpu-scheduler",
    liveUrl: "https://abbinavv.github.io/cpu-scheduler",
    sortOrder: 3
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category?: ProjectCategory): Project[] {
  if (!category) return [...projects].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  return projects
    .filter((p) => p.category === category)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
