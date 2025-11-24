export type Achievement = {
  id: string;
  title: string;
  organization: string;
  date?: string;
  description?: string;
};

export const achievements: Achievement[] = [
  {
    id: "oracle-oci",
    title: "Oracle Cloud Infrastructure 2025 – Data Science",
    organization: "Oracle",
    date: "2025",
    description: "Completed Oracle Cloud Infrastructure certification focusing on data science and cloud computing"
  },
  {
    id: "nptel-java",
    title: "NPTEL – Java Programming",
    organization: "NPTEL",
    date: "2024",
    description: "Successfully completed Java Programming course through National Programme on Technology Enhanced Learning"
  },
  {
    id: "tocfl",
    title: "TOCFL – Novice 2 (Chinese)",
    organization: "TOCFL",
    date: "2024",
    description: "Achieved Novice 2 level in Test of Chinese as a Foreign Language"
  },
  {
    id: "scholarship",
    title: "Academic Scholarship – Top 20% of Department",
    organization: "SRM IST",
    date: "2023-Present",
    description: "Awarded scholarship for maintaining top 20% academic standing in the department"
  }
];
