import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Paspaper.png";
import rmtdevImg from "@/public/English.png";
import wordanalyticsImg from "@/public/Website.png";

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
    title: "BSc IT Undergraduate",
    location: "University of Sri Jayewardenepura, Sri Lanka",
    description:
      "As an enthusiastic undergraduate, I am immersing myself in the dynamic fields of web development and data analysis. Through a blend of hands-on projects and rigorous coursework, I am not only honing my technical skills but also applying them to solve real-world challenges. This practical experience is empowering me to bridge theory and practice, preparing me for a successful career in technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  
  
] as const;

export const projectsData = [
  {
    title: "ICT Paspaper Library System",
    description:
      "The purpose of Paspaper Library System is to provide facilities to get the ICT papers of the last exams held in our campus.",
    tags: ["Java", "MySQL", "OOP", "JavaScript", "HTML", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "English Learning System",
    description:
      "The purpose of the project called English Learning System is to develop English knowledge. This is an ongoing project",
    tags: ["Java", "MySQL", "OOP", "JavaScript", "HTML", "CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Sri Lanka tourism website",
    description:
      "The Sri Lanka tourism website was created using next.js",
    tags: ["React", "Next.js","Tailwind", "Framer", "TypeScript", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "Data Visualization",
  "SQL",
  "OOP",
  "Problem-solving",
  "Collaboration",
  "Adaptability",
  "Communication",
  "Data management",
  "Leadership",

  
] as const;
