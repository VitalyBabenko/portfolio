import { createElement } from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdAnchor } from "react-icons/md";
import inqudPeview from "@/public/inqud-preview.png";
import laMapPreview from "@/public/lamap-preview.png";
import copygenPreview from "@/public/copygen-preview.png";
import workantPreview from "@/public/workant-preview.png";
import reactChessPreview from "@/public/react-chess-preview.png";

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
    icon: createElement(LuGraduationCap),
    date: "2016-2020",
  },
  {
    title: "Self-education & Forxmided courses",
    location: "Ukraine, Kremenchuk",
    description:
      "Acquired the necessary skills and prepared for commercial tasks.",
    icon: createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Admiral Studios (Frontend Developer)",
    location: "Ukraine, Kyiv (Remote)",
    description:
      "I'm now a frontend developer working at Admiral Studios. My stack includes React, Next.js, TypeScript, Tailwind, Redux. I'm open to full-time opportunities.",
    icon: createElement(MdAnchor),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Inqud",
    description:
      "Marketing platform for a cryptocurrency payment service. I contributed 30,000+ lines of code and developed 10+ pages.",
    tags: ["React", "Next.js", "Redux Toolkit", "GraphQL"],
    imageUrl: inqudPeview,
    url: "https://inqud.com",
  },
  {
    title: "Copygen",
    description:
      "AI platform for creating content for blogs, ads, email newsletters and more.",
    tags: ["React", "Next.js", "Material UI", "Styled Components"],
    imageUrl: copygenPreview,
    url: "https://copygen.ai",
  },
  {
    title: "LaMap",
    description:
      "Register of owners, real estate transactions, APA, energy status of Geneva real estate in one click.",
    tags: ["React", "Zustand", "TypeScript", "Mapbox", "Mongo DB"],
    imageUrl: laMapPreview,
    url: "https://lamap.ch",
  },
  {
    title: "Workant",
    description:
      "Marketing site to promote a human resource management application",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
    imageUrl: workantPreview,
    url: "https://workant.io",
  },
  {
    title: "React Chess",
    description: "My training project, regular chess with a timer.",
    tags: ["React", "TypeScript", "Zustand", "Tailwind"],
    imageUrl: reactChessPreview,
    url: "https://react-chess-4osnwe2ue-vitalybabenko.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "GraphQL",
  "React",
  "Next.js",
  "Zustand",
  "Redux",
  "Git",
  "Tailwind",
  "Material UI",
  "Styled Components",
  "Mapbox",
  "CodeMirror",
  "DatoCMS",
] as const;
