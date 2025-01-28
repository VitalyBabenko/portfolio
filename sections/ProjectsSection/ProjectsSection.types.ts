import { CMSImage } from "@/types";

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string;
  image: CMSImage;
  link: string;
};

export interface ProjectsSectionContent {
  title: string;
  projects: Project[];
}

export type ProjectsSectionProps = {
  content: ProjectsSectionContent;
};
