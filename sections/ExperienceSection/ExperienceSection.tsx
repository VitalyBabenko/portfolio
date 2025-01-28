"use client";

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/hooks";
import { useTheme } from "@/context/theme-context";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceSectionProps } from "./ExperienceSection.types";
const VerticalTimeline: any =
  require("react-vertical-timeline-component").VerticalTimeline;

export default function ExperienceSection({ content }: ExperienceSectionProps) {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{content.title}</SectionHeading>

      <VerticalTimeline lineColor="">
        {content.experienceBlocks.map((item) => (
          <ExperienceBlock
            key={item.title}
            theme={theme}
            years={item.years}
            title={item.title}
            icon={item.icon}
            location={item.location}
            description={item.description}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
}
