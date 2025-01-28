import SectionDivider from "@/components/section-divider";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
} from "@/sections/index";
import { AboutSectionContent } from "@/sections/AboutSection/AboutSection.types";
import { heroSectionQuery } from "@/sections/HeroSection/HeroSection.query";
import { aboutSectionQuery } from "@/sections/AboutSection/AboutSection.query";
import { executeQuery } from "@datocms/cda-client";
import { AllSections } from "@/types";
import { HeroSectionContent } from "@/sections/HeroSection/HeroSection.types";
import { projectsSectionQuery } from "@/sections/ProjectsSection/ProjectsSection.query";
import { ProjectsSectionContent } from "@/sections/ProjectsSection/ProjectsSection.types";
import { SkillsSectionContent } from "@/sections/SkillsSection/SkillsSection.types";
import { skillsSectionQuery } from "@/sections/SkillsSection/SkillsSection.query";
import { experienceSectionQuery } from "@/sections/ExperienceSection/ExperienceSection.query";
import { ExperienceSectionContent } from "@/sections/ExperienceSection/ExperienceSection.types";

const query = `
  query {
    allSections {
      id
      hash
      content {
      ${heroSectionQuery}
      ${aboutSectionQuery}
      ${projectsSectionQuery}
      ${skillsSectionQuery}
      ${experienceSectionQuery}
      }
    }
  }
`;

export default async function Home() {
  const data = await executeQuery<AllSections>(query, {
    token: process.env.DATOCMS_API_TOKEN || "",
  });

  if (!data) return null;
  return (
    <main className="flex flex-col items-center px-4">
      <HeroSection
        content={data.allSections[0].content as HeroSectionContent}
      />
      <SectionDivider />
      <AboutSection
        content={data.allSections[1].content as AboutSectionContent}
      />

      <ProjectsSection
        content={data.allSections[2].content as ProjectsSectionContent}
      />

      <SkillsSection
        content={data.allSections[3].content as SkillsSectionContent}
      />

      <ExperienceSection
        content={data.allSections[4].content as ExperienceSectionContent}
      />

      <ContactSection />
    </main>
  );
}
