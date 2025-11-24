export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Business Systems",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    period: "2023 – 2027",
    gpa: "9.52",
    description: "Hybrid curriculum across core CS, business analytics, management, and decision science. Ranked in the top 20% of the department.",
    highlights: [
      "CGPA: 9.52",
      "Top 20% of department",
      "Focus on hybrid CS and business systems curriculum"
    ]
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary (PCM + IP, 87%)",
    institution: "Mayo International School",
    location: "New Delhi",
    period: "Completed: 2022",
    description: "Physics, Chemistry, Mathematics with Informatics Practices"
  },
  {
    id: "secondary",
    degree: "Class 10, 80%",
    institution: "St. Paul's School",
    location: "Begusarai",
    period: "Completed: 2020",
    description: "Secondary education with strong foundation in sciences and mathematics"
  }
];
