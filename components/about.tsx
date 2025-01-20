"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I started my education on my own and then signed up for a mentorship
        from{" "}
        <a
          href="https://foxminded.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          FoxmindEd
        </a>
        . Before I could finish the course, I landed my first job at{" "}
        <a
          href="https://admiral-studios.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          Admiral Studios
        </a>
        . <span className="italic">What I enjoy most about programming</span> is
        solving problems and creating something new. My core stack is{" "}
        <strong className="font-bold">
          React, Next.js, Redux, and Tailwind
        </strong>
        . I am also familiar with TypeScript and GraphQL. I am always eager to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy{" "}
        <span className="font-medium">playing guitar</span>, watching movies,
        going to the gym, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        studying <span className="font-medium">English</span> and{" "}
        <span className="font-medium">psychology</span>.
      </p>
    </motion.section>
  );
}
