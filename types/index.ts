import { links } from "@/lib/data";
import { AboutSectionContent } from "@/sections/AboutSection/AboutSection.types";
import { HeroSectionContent } from "@/sections/HeroSection/HeroSection.types";
import { ProjectsSectionContent } from "@/sections/ProjectsSection/ProjectsSection.types";

export type SectionName = (typeof links)[number]["name"];

export type CMSImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type SocialLink = {
  id: String;
  socialNetwork: "linkedin" | "github" | "telegram";
  link: `https://${string}`;
};

export type SectionHash =
  | "#home"
  | "#about"
  | "#projects"
  | "#skills"
  | "#experience"
  | "#contact";

export type Section = {
  id: string;
  hash: SectionHash;
  content: HeroSectionContent | AboutSectionContent | ProjectsSectionContent;
};

export interface AllSections {
  allSections: Section[];
}
