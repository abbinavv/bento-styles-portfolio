export type Interest = {
  id: string;
  name: string;
  icon?: string;
  description?: string;
};

export const interests: Interest[] = [
  {
    id: "competitive-coding",
    name: "Competitive Coding",
    description: "Solving algorithmic challenges and participating in coding competitions"
  },
  {
    id: "blogging",
    name: "Blogging about Tech & Design",
    description: "Writing about technology, design principles, and development practices"
  },
  {
    id: "languages",
    name: "Learning Languages",
    description: "Exploring new languages and cultures"
  },
  {
    id: "reading-movies",
    name: "Reading & Movies",
    description: "Enjoying books, films, and storytelling"
  }
];
