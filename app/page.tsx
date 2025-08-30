"use client";
import Menubar from "./ui/top-bar/menubar";
import { theme } from "../lib/constants";
import { NextAppProvider } from "@toolpad/core/nextjs";
import Cover from "./ui/cover/cover";
import About from "./ui/about/about";
import ScrollTop from "./ui/scrollTop";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import Education from "./ui/education/education";
import Skills from "./ui/skills/skills";
import Portfolio from "./ui/projects/portfolio";

export default function Home() {
  return (
    <NextAppProvider theme={theme}>
      <header id="top">
        <Menubar />
        <Cover />
      </header>
      <main className="mt-3">
        <About />
        <Education />
        <Skills />
        <Portfolio />
      </main>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </NextAppProvider>
  );
}
