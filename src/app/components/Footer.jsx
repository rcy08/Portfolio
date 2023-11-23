"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BiSolidChevronUpCircle } from "react-icons/bi";
import SocialIcons from "./SocialIcons";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.png";
import TwitterIcon from "../../../public/twitter-icon.png";
import YoutubeIcon from '../../../public/youtube-icon.png';

import { motion } from 'framer-motion';

const quickLinks = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: 'about',
    title: 'About'
  },
  {
    url: 'skills',
    title: 'Skills'
  },
  {
    url: 'education',
    title: 'Education'
  },
  {
    url: 'projects',
    title: 'Projects'
  },
  {
    url: 'contact',
    title: 'Contact'
  },
];

const socialLinks = [
  {
      id: 1,
      url: 'https://github.com/rcy08',
      img: GithubIcon
  },
  {
      id: 2,
      url: 'https://twitter.com/_rcy08_',
      img: TwitterIcon
  },
  {
      id: 3,
      url: 'https://linkedin.com/in/rcy08',
      img: LinkedinIcon
  },
  {
      id: 4,
      url: 'https://www.youtube.com/@rcy08_',
      img: YoutubeIcon
  },
];

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-8 flex md:flex-row flex-col justify-between">

          <div className="text-2xl md:mb-0 mb-12"> Chinmay </div>

          <div className="md:flex md:flex-col md:mb-0 mb-8">
            <h2 className="mb-4 text-2xl"> Quick Links </h2>
            {
              quickLinks.map((link, index) => (
                <div className="mb-2 display-inline" key={index}>

                  <a href={link.url === '/' ? `/` : `#${link.url}`} className="hover:text-[#DC143C]">
                    <motion.div 
                      className="flex flex-row items-center hover:font-semibold"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                    > 
                      <GoArrowRight className="mr-1"/> {link.title} 
                    </motion.div> 
                  </a>
                  
                </div>
              ))
            }
          </div>

          <div className="relative">
            <h5 className="mb-4 text-2xl"> Contact </h5>
              <div className="flex flex-row items-center mb-2"> <MdEmail className="mr-2" /> <p> rajchinmay08@gmail.com </p> </div>
              <div className="flex flex-row items-center mb-4"> <FaLocationCrosshairs className="mr-2"/> <p> Indore, India </p> </div>

              <div className='mt-4 flex flex-row justify-center md:justify-start'>

                {
                  socialLinks.map((link, index) => (
                    <motion.div
                      className='mr-4 mt-2' key={index}
                      whileHover={{
                        scale: 1.1
                      }}
                    >
                        <Link href={`${link.url}`} target='_blank' > <Image src={link.img} alt="Social-Icon" className='w-[40px] h-[40px]' /> </Link>
                    </motion.div>
                  ))
                }

              </div>

            <div className="absolute right-0 bottom-0">
              <Link 
                href='/'
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              > <BiSolidChevronUpCircle className="md:w-[33px] md:h-[33px] w-[24px] h-[24px]"/> </Link> 
            </div>    
          </div>  
           
      </div>
    </footer>
  );
};

export default Footer;