import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countProjectType(type: string, projects: Project[]): number {
  return projects.reduce(
    (count, project) => count + (project.type === type ? 1 : 0),
    0
  );
}
