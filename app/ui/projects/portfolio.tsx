"use client";
import Title from "../title";
import { useProjectType } from "@/lib/customHooks";
import FilterProjects from "./filterProjects";
import Showcase from "./showcase";

export default function Portfolio() {
  const { projectType, setProjectType } = useProjectType();
  return (
    <section id="portfolio" className="gap-y-5 grid mt-4">
      <Title>Portfolio</Title>
      <FilterProjects
        setProjectType={setProjectType}
        projectType={projectType}
      />
      <Showcase type={projectType} />
    </section>
  );
}
