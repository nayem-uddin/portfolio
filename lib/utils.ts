import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from "./definitions";
import { portfolio } from "./constants/portfolio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countProjectType(type: string, projects: Project[]): number {
  return projects.reduce(
    (count, project) => count + (project.type === type ? 1 : 0),
    0
  );
}

export function getProjectDetails(title: string): Project | undefined {
  const formattedTitle = title.replaceAll("%20", " ");
  return portfolio.find((project) => project.title === formattedTitle);
}
