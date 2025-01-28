"use client";

import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { AboutSectionProps } from "./AboutSection.types";
import { StructuredText } from "react-datocms/structured-text";

const AboutSection = ({ content }: AboutSectionProps) => {
  const { ref } = useSectionInView("About");

  if (!content) return null;
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{content.title}</SectionHeading>

      <div className="flex flex-col gap-2">
        <StructuredText data={content.description} />
      </div>
    </motion.section>
  );
};

export default AboutSection;
