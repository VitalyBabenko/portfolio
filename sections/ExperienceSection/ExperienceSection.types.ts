export interface ExperienceStep {
  icon: string;
  title: string;
  location: string;
  description: string;
  years: string;
}

export interface ExperienceSectionContent {
  title: string;
  experienceBlocks: ExperienceStep[];
}

export interface ExperienceSectionProps {
  content: ExperienceSectionContent;
}
