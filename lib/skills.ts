export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Java", "C++", "Python", "JavaScript"]
  },
  {
    id: "frontend-mobile",
    name: "Frontend & Mobile",
    skills: ["React", "Swift", "HTML/CSS", "Figma"]
  },
  {
    id: "backend-data",
    name: "Backend & Data",
    skills: ["Flask", "MySQL", "MongoDB"]
  },
  {
    id: "tools",
    name: "Tools",
    skills: ["Git/GitHub"]
  }
];

export const allSkills = skillCategories.flatMap(category => category.skills);
