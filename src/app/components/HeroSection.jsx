"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.png";
import TwitterIcon from "../../../public/twitter-icon.png";
import YoutubeIcon from '../../../public/youtube-icon.png';
import SocialIcons from './SocialIcons';
import Programmer from '../../../public/images/Education/programmer.webp';

import { Tilt } from 'react-tilt';
import { FaArrowDown } from "react-icons/fa6";

import { easeOut, motion, spring } from 'framer-motion';

const TiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const socialLinks = [
    {
        url: 'https://github.com/rcy08',
        img: GithubIcon
    },
    {
        url: 'https://linkedin.com/in/rcy08',
        img: LinkedinIcon
    },
    {
        url: 'https://twitter.com/_rcy08_',
        img: TwitterIcon
    },
    {
        url: 'https://www.youtube.com/@rcy08_',
        img: YoutubeIcon
    },
];

const HeroSection = () => {
  return (
    <section className='min-h-[100vh] md:min-h-[50vh] w-full flex flex-col sm:flex-row justify-between items-center lg:mt-32 md:mt-20 mt-8 md:mx-[2px]' >
        {/* <div className=' '> */}
            <div className='text-left sm:text-left'>
                <motion.h1 
                    className='text-white mb-20 sm:mb-4 text-4xl lg:text-6xl font-extrabold'
                    variants={{
                        hidden: {
                            x: 0, 
                            y: 50, 
                            opacity: 0 
                        },
                        visible: {
                            x: 0, 
                            y: 0, 
                            opacity: 1,
                            transition: {
                                type: "spring",
                                duration: 1,
                                delay: 0.25,
                                ease: easeOut
                            }
                        }
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.25 }}
                > 
                        <span> Hi, I&apos;m </span>
                        <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Chinmay{" "} </span> 
                        <br />
                        <span className='text-2xl md:text-3xl'> 
                            I&apos;m Interested in 
                        </span>
                        <br className='xl:hidden' />
                        <TypeAnimation
                            className='text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
                            sequence={[
                                ' Competitive Programming',
                                1000,
                                ' Web Development',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        /> 
                </motion.h1>
                {/* <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laudantium labore assumenda nostrum mollitia minus perferendis 
                </p> */}
                <div className='mt-8'>
                    <a
                        href={`#about`}
                    >
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'> 
                            <motion.div
                                whileHover={{
                                    scale: 1.05
                                }}
                                className='flex justify-center items-center font-semibold hover:font-bold'> About Me 
                            <div> <FaArrowDown className='ml-4'/> </div> </motion.div> 
                        </button>    
                    </a>
                    
                    {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'> 
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV </span>  
                    </button> */}
                </div>
                <div className='mt-12 flex flex-row justify-center md:justify-start mb-16 sm:mb-0'>

                    {
                        socialLinks.map((link, index) => (
                            <div className='mr-[20px]' key={index} >
                                <SocialIcons key={index} url={link.url} icon={link.img} />
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='mb-16 sm:mb-0'>
                    <Tilt
                        options={TiltOptions}
                        className='rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] relative'
                    >
                        <Image
                            src={Programmer}
                            alt='hero image'
                            className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]  rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />        
                    </Tilt>
                    
            </div>
        {/* </div> */}
        
    </section>
  )
}

export default HeroSection