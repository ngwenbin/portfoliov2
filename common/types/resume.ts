import { StaticImageData } from "next/image";

export interface ProfessionalExperienceType {
  title: string;
  company: string;
  duration: string;
  country: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
}

export interface EnrichedProject extends Project {
  image: StaticImageData;
  ghUrl: string;
  technologies: Array<string>;
}

export interface Achievement {
  year: number;
  achievements: Array<string>;
}
