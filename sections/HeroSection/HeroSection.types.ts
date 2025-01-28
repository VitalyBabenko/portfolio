import { CMSImage, SocialLink } from "@/types";
import { StructuredText } from "datocms-structured-text-utils";

export interface HeroSectionContent {
  avatar: CMSImage;
  title: StructuredText;
  contactButtonText: string;
  cvButtonText: string;
  socialLinks: SocialLink[];
}

export interface HeroSectionProps {
  content: HeroSectionContent | null;
}
