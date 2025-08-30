import { createTheme } from "@mui/material";
import { DegreeDetails, SectionLink, Skill } from "./definitions";

export const links: SectionLink[] = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Portfolio",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];
export const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const steps: DegreeDetails[] = [
  {
    label: "B.Sc. in Mechatronics Engineering",
    description: "Khulna University of Engineering & Technology, 2024",
    logo: "/uni.png",
  },
  {
    label: "Higher Secondary Certificate",
    description: "Government Science College, 2018",
    logo: "/college.png",
  },
  {
    label: "Secondary School Certificate",
    description: "A.K. School and College, 2016",
    logo: "/school.webp",
  },
];

export const langNScripts: Skill[] = [
  {
    logoURL: "/html.png",
    name: "HTML",
  },
  {
    logoURL: "/css.png",
    name: "CSS",
  },
  {
    logoURL: "/javascript.png",
    name: "JavaScript",
  },
  {
    logoURL: "/typescript.png",
    name: "TypeScript",
  },
];

export const frontEnd: Skill[] = [
  {
    logoURL: "/nextjs.png",
    name: "Next.js",
  },
  {
    logoURL: "/react.png",
    name: "React.js",
  },
  {
    logoURL: "/tailwindcss.png",
    name: "Tailwind CSS",
  },
  {
    logoURL: "/mui.png",
    name: "Material UI",
  },
  {
    logoURL: "/bootstrap.png",
    name: "Bootstrap",
  },
];
export const backend: Skill[] = [
  {
    logoURL: "/node.png",
    name: "Node.js",
  },
  {
    logoURL: "/express.png",
    name: "Express.js",
  },
  {
    logoURL: "/sequelize.png",
    name: "Sequelize",
  },
];
export const dbms: Skill[] = [
  {
    logoURL: "/mysql.png",
    name: "MySQL",
  },
  {
    logoURL: "/postgresql.png",
    name: "PostgreSQL",
  },
];
