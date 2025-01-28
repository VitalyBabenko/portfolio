"use client";

import SectionHeading from "@/components/section-heading";
import Project from "./Project/Project";
import { useSectionInView } from "@/hooks";
import { ProjectsSectionProps } from "./ProjectsSection.types";

export default function ProjectsSection({ content }: ProjectsSectionProps) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{content.title}</SectionHeading>
      <div>
        {content.projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
