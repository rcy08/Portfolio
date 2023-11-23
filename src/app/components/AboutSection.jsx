"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidChevronsRight } from "react-icons/bi";

import { easeOut, motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

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

const profiles = [
    {
        url: 'https://codeforces.com/profile/rc08',
        title: 'CodeForces',
        description: 'Pupil (max. rating: 1359)',
    },
    {
        url: 'https://leetcode.com/rc08',
        title: 'LeetCode',
        description: 'Top 6% (max. rating: 1841)',
    },
    {
        url: 'https://codechef.com/users/rcy08',
        title: 'CodeChef',
        description: '3 Stars (max. rating: 1641)',
    },
    {
        url: 'https://auth.geeksforgeeks.org/user/rc08',
        title: 'GeeksforGeeks',
        description: 'Solved 100+ DSA problems',
    },
]

const AboutSection = () => {

  return (
    <section className='text-white sm:mb-36' id='about'>
        <h2 className='text-4xl font-bold text-white mb-4 text-center'> About Me </h2> 
        <div className='md:grid md:grid-cols-2 flex flex-col justify-center md:flex-none gap-8 items-center py-8 px-0 xl:gap-16 sm:py-16 xl:px-16'>
            <Tilt
                options={TiltOptions}
                className='w-[275px] h-[275px] sm:w-[325px] sm:h-[352px] lg:w-[400px] lg:h-[400px] mb-16'
            >
                <Image src='/images/about-image.png' width={400} height={400} className='sm:mb-0' />
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
                    I'm a final year UG student at IIT Indore with a passion for web development and competitive programming
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
                    profiles.map((profile) => (
                        <motion.div 
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
                
            </div>
        </div>
    </section>
  )
}

export default AboutSection