export interface NavigationLink {
  name: string;
  link: string;
}
export interface DegreeDetails {
  label: string;
  description: string;
  logo: string;
}
export interface Skill {
  logoURL: string;
  name: string;
  level: number;
}
export interface Project {
  title: string;
  description: string;
  repoLinks: RepoLink;
  cover: string;
  type: "fullStack" | "frontEnd";
  techStack: string[];
}

export interface ToggleOption {
  label: string;
  value: string;
  count: number;
}

export type RepoLink = {
  frontEndRepo?: string;
  backEndRepo?: string;
};
