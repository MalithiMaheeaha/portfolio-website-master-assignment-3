"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Malithi Maheesha. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> This website is built with
        <strong> React</strong> & <strong>Next.js</strong> (App Router & Server Actions), utilizing 
        <strong> TypeScript</strong> for type safety and maintainability. The design is crafted with 
        <strong>Tailwind CSS</strong>, ensuring a modern and responsive user experience. To enhance user interaction, 
        <strong>Framer Motion</strong> is implemented for smooth animations. Email functionalities are efficiently handled with 
        <strong>React Email</strong> & <strong>Resend</strong>. Proudly hosted on
        <strong>Vercel</strong>, this website offers fast performance and reliable uptime.
      </p>

      <p className="text-xs">
       Whether you're here to explore my projects or learn more about my skills, this platform serves as a showcase of 
       my work and a testament to my passion for web development. Stay tuned for updates and new features as I continue 
       to enhance this site!
      </p>

    </footer>
  );
}
