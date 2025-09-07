import { portfolio } from "@/lib/constants/portfolio";
import { Project } from "@/lib/definitions";
import { useMemo } from "react";
import ProjectCard from "./projectCard";

export default function Showcase({ type }: { type: string }) {
  const projectsFiltered: Project[] = useMemo(
    () =>
      type === "all"
        ? portfolio
        : portfolio.filter((project) => project.type === type),
    [type]
  );
  return (
    <div className="flex flex-wrap justify-center gap-x-4">
      {projectsFiltered.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
