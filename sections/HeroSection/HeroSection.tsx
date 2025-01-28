"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { useSectionInView } from "@/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HeroSectionProps } from "./HeroSection.types";
import { StructuredText } from "react-datocms/structured-text";
import Avatar from "@/components/avatar";

function HeroSection({ content }: HeroSectionProps) {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  if (!content) return null;

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[48rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <Avatar url={content.avatar?.url} alt={content.avatar?.alt} />

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StructuredText data={content.title} />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {content.contactButtonText}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          {content.cvButtonText}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>

      <motion.div
        className="flex text-lg mt-5 justify-center gap-2 text-gray-400"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {content.socialLinks.map((link, index) => (
          <Link
            key={link.link || index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            {link.socialNetwork === "linkedin" && <BsLinkedin />}
            {link.socialNetwork === "github" && <FaGithubSquare />}
            {link.socialNetwork === "telegram" && (
              <BiLogoTelegram className="dark:bg-white/60 dark:text-gray-700 bg-gray-700 text-white p-0.5 rounded-sm max-w-[19px] max-h-[19px]" />
            )}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default HeroSection;
