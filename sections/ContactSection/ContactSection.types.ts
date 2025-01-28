import { StructuredText } from "datocms-structured-text-utils";

export interface ContactSectionContent {
  title: string;
  description: StructuredText;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
}

export interface ContactSectionProps {
  content: ContactSectionContent;
}
