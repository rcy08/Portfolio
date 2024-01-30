"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { navLinks } from '../constants';
import { easeInOut, motion, spring } from 'framer-motion';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 w-full bg-[#121212] bg-opacity-100'>
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
                                <NavLink href={link.path} title={link.title} />
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