"use client";
import Menubar from "./ui/top-bar/menubar";
import { theme } from "./lib/constants";
import { NextAppProvider } from "@toolpad/core/nextjs";
import Cover from "./ui/cover/cover";
import About from "./ui/about/about";

export default function Home() {
  return (
    <NextAppProvider theme={theme}>
      <header>
        <Menubar />
        <Cover />
      </header>
      <main className="mt-3">
        <About />
      </main>
    </NextAppProvider>
  );
}
