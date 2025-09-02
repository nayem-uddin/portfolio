import { portfolio } from "@/lib/constants/portfolio";
import Title from "../title";
import ProjectCard from "./projectCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="gap-y-5 grid mt-4">
      <Title>Portfolio</Title>
      <div className="flex flex-wrap justify-center gap-x-4">
        {portfolio.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
