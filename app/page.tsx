"use client";
import Menubar from "./ui/top-bar/menubar";

import { NextAppProvider } from "@toolpad/core/nextjs";
import Cover from "./ui/cover/cover";
import About from "./ui/about/about";
import ScrollTop from "./ui/scrollTop";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import Education from "./ui/education/education";
import Skills from "./ui/skills/skills";
import Portfolio from "./ui/projects/portfolio";
import Contact from "./ui/contact/contact";
import { theme } from "@/lib/theme";

export default function Home() {
  return (
    <NextAppProvider theme={theme}>
      <header id="top">
        <Menubar />
        <Cover />
      </header>
      <main className="mt-3">
        <About />
        <Portfolio />
        <Skills />
        <Education />
      </main>
      <footer>
        <Contact />
      </footer>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </NextAppProvider>
  );
}
