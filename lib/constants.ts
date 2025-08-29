import { createTheme } from "@mui/material";
import { DegreeDetails, SectionLink } from "./definitions";

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
    link: "#",
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
