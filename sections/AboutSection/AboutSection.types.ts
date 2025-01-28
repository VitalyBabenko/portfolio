import { StructuredText } from "datocms-structured-text-utils";

export interface AboutSectionContent {
  title: string;
  description: StructuredText;
}

export interface AboutSectionProps {
  content: AboutSectionContent | null;
}
