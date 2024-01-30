"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, easeOut } from 'framer-motion';
import { imageLoader } from "../constants";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <motion.div 
        className="z-10"
        variants={{
          hidden: {
              y: 50,
              opacity: 0
          },
          visible: {
              y: 0,
              opacity: 1,
              transition: {
                  type: "tween",
                  duration: 0.5,
                  delay: 0.125,
                  ease: easeOut
              }
          }
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.25 }}
      >
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for Software Engineer roles, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 md:justify-start justify-center my-[32px]">
          <motion.div
            className="mr-4"
            whileHover={{
              scale: 1.1
            }}
          >
            <Link href="https://github.com/rcy08" target="_blank">
              <Image 
                loader={imageLoader}
                src={'assets/icons/github-icon.svg'} 
                alt="Github Icon" 
                width={40}
                height={40}
              />
            </Link>  
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1
            }}
          >
            <Link href="https://linkedin.com/in/rcy08" target="_blank">
              <Image 
                loader={imageLoader}
                src={'assets/icons/linkedin-icon.svg'} 
                alt="Linkedin Icon" 
                width={40}
                height={40}
              />
            </Link>  
          </motion.div>
        </div>
      </motion.div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="mb-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 hover:--tw-shadow-color: #3730a3; text-white font-medium py-2.5 px-5 rounded-lg w-2/3 md:w-1/2 xl:w-1/3"
            >
              <motion.p 
                whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }} 
              > Send Message </motion.p> 
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;