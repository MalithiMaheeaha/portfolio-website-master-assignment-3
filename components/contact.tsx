"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const formStyle :React.CSSProperties = { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
    color: '#000000',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '20px auto',
    marginTop: '80px',
  };

  const inputStyle = {
    width: '100%',
    padding: '16px', // Increased padding for larger input fields
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    color: '#000000',
  };

  const textareaStyle = {
    ...inputStyle, // Inherit styles from inputStyle
    height: '100px', // Set a height for the textarea
  };

  const buttonStyle = {
    width: '100%',
    padding: '16px', // Increased padding for larger button
    marginTop: '20px',
    backgroundColor: '#d8d8d8',
    color: '#000000',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert('Email sent successfully!');
    setSenderEmail('');
    setMessage('');
  };

  const handleClear = () => {
    setSenderEmail('');
    setMessage('');
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scrool-mt-28 mb-28 sm:mb-40 w-full max-w-6xl text-center bg-blue-200 p-8 rounded-lg"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
          malithimaheesha.com
        </a>{" "}
        or through this form.
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          placeholder="Your Email"
          required
          style={inputStyle}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-150 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your Message"
          maxLength={5000}
          required
          style={textareaStyle} 
        />
        
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </motion.section>
  );
}
