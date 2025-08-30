export interface SectionLink {
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
}
export interface Project {
  title: string;
  description: string;
  frontEndRepo: string;
  backEndRepo?: string;
  cover: string;
}
