import { createElement } from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdAnchor } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Trained as a marketer",
    location: "Ukraine, Kremenchuk",
    description:
      "Received a bachelor's degree from the Mikhail Ostrogradsky Kremenchug National University (KrNU).",
    icon: "graduationCap",
    date: "2016-2020",
  },
  {
    title: "Self-education & Forxmided courses",
    location: "Ukraine, Kremenchuk",
    description:
      "Acquired the necessary skills and prepared for commercial tasks.",
    icon: "react",
    date: "2021 - 2023",
  },
  {
    title: "Admiral Studios (Frontend Developer)",
    location: "Ukraine, Kyiv (Remote)",
    description:
      "I'm now a frontend developer working at Admiral Studios. My stack includes React, Next.js, TypeScript, Tailwind, Redux. I'm open to full-time opportunities.",
    icon: "anchor",
    date: "2023 - present",
  },
] as const;
