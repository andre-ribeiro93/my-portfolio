import { IoCodeSlash } from "react-icons/io5"
import { GoDatabase, GoGear } from "react-icons/go";

export const skillsItems = [
  {
    id: 1,
    icon: IoCodeSlash,
    title: "Front-End",
    stacks: [
      { name: "HTML", id: 1.1 },
      { name: "CSS", id: 1.2 },
      { name: "JavaScript", id: 1.3 },
      { name: "TypeScript", id: 1.4 },
      { name: "React", id: 1.5 },
      { name: "Next.js", id: 1.6 },
      { name: "Tailwind CSS", id: 1.7 },
      { name: "Styled-components", id: 1.8 }
    ]
  },

  {
    id: 2,
    icon: GoDatabase,
    title: "Back-End",
    stacks: [
      { name: "Node.js", id: 2.1 },
      { name: "Express", id: 2.2 },
      { name: "API REST", id: 2.3 },
      { name: "MongoDB", id: 2.4 },
      { name: "MariaDB", id: 2.5 },
      { name: "Python", id: 2.6 }
    ]
  },

  {
    id: 3,
    icon: GoGear,
    title: "Ferramentas",
    stacks: [
      { name: "Git", id: 3.1 },
      { name: "GitHub", id: 3.2 },
      { name: "Postman", id: 3.3 },
      { name: "MySQL Workbench", id: 3.4 },
      { name: "Figma", id: 3.5 },
      { name: "Photoshop", id: 3.6 },
      { name: "Illustrator", id: 3.7 }
    ]
  },
];