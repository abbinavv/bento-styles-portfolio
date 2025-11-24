export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    id: "bsnl",
    title: "Vocational Trainee",
    company: "BSNL",
    location: "Bihar",
    period: "June 2025 – Present",
    current: true,
    description: "Gaining hands-on experience in telecommunications infrastructure and network management at Bharat Sanchar Nigam Limited.",
    responsibilities: [
      "Built practical understanding of telecom infrastructure, broadband systems, and data routing",
      "Gained exposure to multiplexing, switching systems, and real-world network management",
      "Assisted with basic network diagnostics and configuration under supervision"
    ]
  },
  {
    id: "launchpad",
    title: "TechLead",
    company: "Launchpad Club",
    location: "SRM IST",
    period: "April 2023 – Present",
    current: true,
    description: "Leading tech initiatives at the campus startup club, fostering innovation and supporting student entrepreneurs.",
    responsibilities: [
      "Lead tech initiatives at the campus startup club, supporting students and early-stage founders",
      "Organised pitch events and tech showcases, collaborating with cross-functional teams",
      "Built and managed internal web/app tooling for events and startup showcases"
    ]
  }
];
