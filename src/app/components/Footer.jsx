"use client";
import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { FaLocationCrosshairs } from "react-icons/fa6";

import { motion } from 'framer-motion';
import { 
  quickLinks,  
  myName, 
  quickLinksHeader, 
  contact, 
  myEmail, 
  myLocation 
} from "../constants";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MY_GITHUB_PROFILE_URL, MY_LINKEDIN_PROFILE_URL } from "../constants/url";
import SocialIcons from "./SocialIcons";

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

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent ">
      <div className="container p-4 md:p-8 flex md:flex-row flex-col justify-between">
          <button
            onClick={
              () => window.scrollTo(
                { 
                  top: 0, 
                  behavior: 'smooth' 
                }
              )
            }
            className="h-fit w-fit"
          >
            <div className="text-2xl md:mb-0 mb-12"> 
              { myName } 
            </div>  
          </button>

          <div className="md:flex md:flex-col md:mb-0 mb-8">
            <h2 className="mb-4 text-2xl"> 
              { quickLinksHeader } 
            </h2>
            {
              quickLinks.map((link, index) => (
                <div className="mb-2 display-inline" key={index}>

                  <button
                    onClick={() => {
                      if(link.url === '/'){
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }
                      else{
                        const targetElement = document.querySelector(`#${link.url}`);
                        if (targetElement) {
                          window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="flex flex-row items-center hover:font-semibold"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                    > 
                      <GoArrowRight className="mr-1"/> {link.title} 
                    </motion.div> 
                  </button>

                  {/* <a href={link.url === '/' ? `/` : `#${link.url}`} className="hover:text-[#DC143C]">
                    
                  </a> */}
                  
                </div>
              ))
            }
          </div>

          <div className="relative">
            <h5 className="mb-4 text-2xl"> 
              { contact } 
            </h5>
              <div className="flex flex-row items-center mb-2"> 
                <MdEmail className="mr-2" /> 
                <Link 
                  href={`mailto:${myEmail}`} 
                  target='_blank' 
                  className='hover:font-semibold'
                > 
                  { myEmail } 
                </Link> 
              </div>
              <div className="flex flex-row items-center mb-4"> 
                <FaLocationCrosshairs className="mr-2"/> 
                <p>
                  { myLocation }
                </p> 
              </div>

              <div className='mt-4 flex flex-row justify-center md:justify-start'>

                {
                  socialLinks?.map((link, index) => (
                    <motion.div
                      key={index}
                      className='mr-4 mt-2' 
                      whileHover={{
                        scale: 1.1
                      }}
                    >
                      <SocialIcons
                        url={link.url}
                        icon={link.icon}
                      />
                    </motion.div>
                  ))
                }

              </div>
          </div>  
           
      </div>
    </footer>
  );
};

export default Footer;