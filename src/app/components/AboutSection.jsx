"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidChevronsRight } from "react-icons/bi";

import { easeOut, motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { profiles, TiltOptions, imageLoader } from '@/app/constants/index';

const AboutSection = () => {

  return (
    <section className='text-white sm:mb-36' id='about'>
        <h2 className='text-4xl font-bold text-white mb-4 text-center'> About Me </h2> 
        <div className='md:grid md:grid-cols-2 flex flex-col justify-center md:flex-none gap-8 items-center py-8 px-0 xl:gap-16 sm:py-16 xl:px-16'>
            <Tilt
                options={TiltOptions}
                className='w-[275px] h-[275px] sm:w-[325px] sm:h-[352px] lg:w-[400px] lg:h-[400px] mb-16'
            >
                <Image 
                    loader={imageLoader}
                    src={'assets/images/about-image.jpg'} 
                    alt='my-image' 
                    width={350} 
                    height={350} 
                    className='sm:mb-0' 
                />
            </Tilt>
            <div 
                className='mt-4 md:mt-16 text-left flex flex-col h-full'
            >
                
                <motion.p
                    className='text-base lg:text-lg'
                    variants={{
                        hidden: {
                            y: -50,
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
                    I&apos;m a final year UG student at IIT Indore with a passion for web development and competitive programming
                </motion.p>
                <br />
                <br />
                <motion.h2
                    className='text-base font-medium text-white mb-4'
                    variants={{
                        hidden: {
                            y: -50,
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
                > My Coding Profiles </motion.h2> 
                
                {
                    profiles.map((profile, index) => (
                        <motion.div 
                            key={index}
                            className='text-white text-[12px] md:text-sm flex flex-row items-center mb-2'
                            variants={{
                                hidden: {
                                    y: -50,
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
                                <BiSolidChevronsRight className='mr-2' />
                                <Link href={profile.url} className='text-blue-500 hover:text-blue-700 mr-[7px]' target='_blank'> {profile.title}: </Link>
                                <p> {profile.description} </p>
                        </motion.div>
                    ))
                }
                
                <button 
                    className='mt-8 sm:mt-12 px-6 py-3 w-full sm:w-fit rounded-xl mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold'
                    onClick={() => window.open('/assets/Chinmay_Resume.pdf', '_blank')}
                > 
                    Resume
                </button>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;