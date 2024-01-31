"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';
import SocialIcons from './SocialIcons';

import { Tilt } from 'react-tilt';
import { FaArrowDown } from "react-icons/fa6";
import { IoArrowDownCircle } from "react-icons/io5";

import { easeOut, motion, spring } from 'framer-motion';

import { TiltOptions, socialLinks, imageLoader } from '../constants';

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
                            <div> <IoArrowDownCircle className='ml-4 sm:ml-2 w-[90%] h-[75%]'/> </div> </motion.div> 
                        </button>    
                    </a>
                    
                    {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'> 
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV </span>  
                    </button> */}
                </div>
                <div className='mt-12 flex flex-row justify-center md:justify-start mb-16 sm:mb-0'>

                    {
                        socialLinks.map((link) => (
                            <div className='mr-[20px]' key={link.id} >
                                <SocialIcons url={link.url} icon={link.path} />
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
                            loader={imageLoader}
                            src={'assets/images/education/programmer.webp'}
                            alt='hero image'
                            className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]  rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                            priority
                        />        
                    </Tilt>
                    
            </div>
        {/* </div> */}
        
    </section>
  )
}

export default HeroSection