"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { navLinks } from '../constants';
import { easeInOut, motion, spring } from 'framer-motion';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showBar, setShowBar] = useState(false);
    const [i, setI] = useState('');

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 w-full bg-[#121212] bg-opacity-100 shadow-md shadow-[#0c0c0c]'>
        <div className='h-[3px] w-full bg-[#121212]' />
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link 
                href={"/"} 
                className='ml-8 my-2 lg:ml-28 text-lg md:text-xl text-white font-bold'
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
            > 
                <p className='head text-2xl' > Chinmay </p>  
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)} 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <Bars3Icon className='h-5 w-5' />
                        </button>

                    ) : (

                        <button 
                            onClick={() => setNavbarOpen(false)} 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto md:mr-4 lg:mr-24' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <button 
                                    onClick={() => {
                                        const targetElement = document.querySelector(`#${link.path}`);
                                            if (targetElement) {
                                            window.scrollTo({
                                                top: targetElement.offsetTop - 70,
                                                behavior: 'smooth',
                                            });
                                        }
                                    }}
                                    onMouseEnter={() => {setShowBar(true); setI(index)}}
                                    onMouseLeave={() => {setShowBar(false); setI(index)}}
                                >
                                    <div className='w-full relative'> 
                                        <p
                                            className='block py-2 text-violet-700 sm:text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white'
                                        >
                                            {link.title}     
                                        </p>
                                        <motion.div 
                                            className='absolute top-[30px] bg-violet-700 w-full'
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    width: '25%',
                                                    height: 2
                                                },
                                                show: {
                                                    opacity: 1,
                                                    width: '100%',
                                                    height: 2.5,
                                                    transition: {
                                                        duration: 0.5
                                                    }
                                                },
                                                leave: {
                                                    opacity: 0,
                                                    width: '25%',
                                                    height: 2,
                                                    transition: {
                                                        duration: 0.5
                                                    }
                                                }
                                            }}
                                            initial='hidden'
                                            animate={showBar && i === index ? 'show' : 'hidden'}
                                            exit={!showBar && i === index ? 'leave' : 'show'}
                                        > </motion.div>   
                                    </div>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? 
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: -50
                    },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: spring,
                            duration: 0.3,
                            stiffness: 600,
                            damping: 10,
                            ease: easeInOut
                        }
                    }
                }}
                initial='hidden'
                animate='show'
            >
                <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} /> 
            </motion.div>
            : null
        }
    </nav>
  )
}

export default Navbar;