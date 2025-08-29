import { createTheme } from "@mui/material";
import { SectionLink } from "./definitions";

export const links: SectionLink[] = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Education",
    link: "#",
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
