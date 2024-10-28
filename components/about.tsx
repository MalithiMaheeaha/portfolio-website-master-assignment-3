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
      className="scrool-mt-28 mb-28 sm:mb-40 w-full max-w-6xl text-center bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm currently studying for a BSc in Information Technology, with a focus on
      <span className="bold"> Web Development</span> and <span className="bold">Data Analysis</span>. 
      Throughout my studies, developed expertise in web development using  <span className="italic">React </span> 
      and <span className="italic">Next.js</span> . 
      Involved in freelance work to enhance skills, addressing real-world challenges through projects related to web development and system development.
      Dedicated to leveraging technology to solve complex problems and creating efficient, scalable solutions in projects.
      {" "}
      </p>

      <p>
        <span className="bold">In my free time</span>, I enjoy dancing, watching movies, and listening to music . 
        I am currently preparing for the {" "}
        <span className="font-medium">law entrance exam</span>. 
      </p>
    </motion.section>
  );
}
