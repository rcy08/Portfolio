"use client";
import React, { useState } from "react";

import { motion, easeOut } from 'framer-motion';
import { 
  letConnect, 
  emailSectionBody, 
  mailSent,
  yourMail,
  subject,
  message,
  sendMessage 
} from "../constants";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MY_GITHUB_PROFILE_URL, MY_LINKEDIN_PROFILE_URL } from "../constants/url";
import SocialIcons from "./SocialIcons";

import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  {
    id: 1,
    url: MY_GITHUB_PROFILE_URL,
    icon: <GitHubIcon className='scale-[125%]' />
  },
  {
    id: 2,
    url: MY_LINKEDIN_PROFILE_URL,
    icon: <LinkedInIcon className='scale-[125%]' />
  },
];

const EmailSection = () => {
  const { theme } = useTheme();
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
    // const resData = await response.json();

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
      <div 
        className="
          bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
          from-primary-900 to-transparent rounded-full 
          h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"
      >
      </div>
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
        <h5 className="text-xl font-bold my-2">
          { letConnect }
        </h5>
        <p className={`${theme === "dark" && "text-[#ADB7BE]"} mb-4 max-w-md`}>
          {" "}
          { emailSectionBody }
        </p>
        <div className="socials flex flex-row gap-2 md:justify-start justify-center my-[32px]">
          {
            socialLinks?.map((link) => (
              <div className='mr-[20px]' key={link.id}>
                  <SocialIcons 
                    url={link.url} 
                    icon={link.icon} 
                  />
              </div>
            ))
          }
        </div>
      </motion.div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            { mailSent }
          </p>
        ) : (
          <form 
            className="flex flex-col" 
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className=" block mb-2 text-sm font-medium"
              >
                { yourMail }
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={`
                  ${theme === "light" ? "bg-[#E3E4E8]" : "bg-[#18191E] text-gray-100"}  
                  border border-[#33353F] placeholder-[#9CA2A9] 
                  text-sm rounded-lg 
                  block w-full p-2.5`
                }
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-sm mb-2 font-medium"
              >
                { subject }
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className={`
                  ${theme === "light" ? "bg-[#E3E4E8]" : "bg-[#18191E] text-gray-100"}  
                  border border-[#33353F] placeholder-[#9CA2A9] 
                  text-sm rounded-lg 
                  block w-full p-2.5`
                }
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className=" block text-sm mb-2 font-medium"
              >
                { message }
              </label>
              <textarea
                name="message"
                id="message"
                className={`
                  ${theme === "light" ? "bg-[#E3E4E8]" : "bg-[#18191E] text-gray-100"}  
                  border border-[#33353F] placeholder-[#9CA2A9] 
                  text-sm rounded-lg 
                  block w-full p-2.5`
                }
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-600 hover:--tw-shadow-color: #3730a3; font-medium py-2.5 px-5 rounded-lg w-2/3 md:w-1/2 xl:w-1/3"
            >
              <motion.p 
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 }
                }}
                className="text-white"
              >
                { sendMessage }
              </motion.p> 
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;