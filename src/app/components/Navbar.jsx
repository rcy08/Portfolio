"use client";
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { navLinks, myName } from '../constants';
import { color, motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { useTheme } from '../context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ atTop }) => {
    const { theme, toggleTheme } = useTheme();
    const [showBar, setShowBar] = useState(false);
    const [i, setI] = useState('');

    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsMobileDrawerOpen(open);
    };
    
    const mobileDrawer = () => (
        <Box
            sx={{ width: ((4 / 5) * window.screen.width) }}
            role="presentation"
        >
            <div className={`w-full min-h-[100vh] ${theme === "light" ? "bg-[#D2E0ED]" : "bg-[#222]"}`}>
                <button 
                    onClick={toggleDrawer(false)} 
                    className={`
                        absolute right-4 top-4 
                        flex items-center px-3 py-2 border rounded 
                        ${theme === "light" ? "text-black border-black" : "border-slate-200  hover:border-white text-slate-200 hover:text-white"} 
                    `}
                >
                    <XMarkIcon className='h-5 w-5' />
                </button>

                <MenuOverlay links={navLinks} setState={setIsMobileDrawerOpen} />

            </div>
        </Box>
    );

    const toggleThemeComponent = () => {
        return (
            <button
                onClick={toggleTheme}
                className={`
                    w-[40px] h-[40px] 
                    rounded-[50%] 
                    flex items-center justify-center 
                    border-2 border-solid ${theme === "light" ? "border-[#C7C9D1]" : "border-transparent"} hover:border-[#8F92A3]
                `}
                style={{
                    backgroundColor: theme === "light" ? "#E3E4E8" : "#454754",
                }}
            >
                { theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> }
            </button>
        );
    }

  return (
    <nav className={`
        fixed top-0 left-0 right-0 z-20 w-full 
        shadow-lg ${theme === "light" ? "shadow-[#FFFFFF]" : "shadow-[#131313]"}
        ${atTop ? "sm:shadow-none" : theme === "light" ? "sm:shadow-[#FFFFFF]" : "sm:shadow-[#131313]"} 
    `}>
        <div className='h-[3px] w-full' />
        <div className={`flex flex-wrap items-center justify-between mx-auto px-4 py-2 ${atTop ? "sm:h-[120px]" : "sm:h-[70px]"} max-w-[1600px]`}>
            <button 
                className='ml-8 my-2 lg:ml-28 text-lg md:text-xl text-white font-bold'
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            > 
                <p 
                    className={`text-2xl ${theme === "light" ? "hover:text-violet-700" : "text-[#d7dbdf] hover:text-white"}`}
                    style={{
                        fontWeight: '900'
                    }}
                > { myName } </p>  
            </button>
            <div 
                className='mobile-menu md:hidden flex items-center gap-4'
            >
                {toggleThemeComponent()}
                <button 
                    onClick={toggleDrawer(true)}
                    className={`
                        flex items-center
                        px-3 py-2 rounded
                        border ${theme === "light" ? "border-black text-black" : "border-slate-200  hover:border-white text-slate-200 hover:text-white"} 
                    `}
                >
                    <MenuIcon 
                        className={`${theme === "light" ? "" : ""}`} 
                    />
                </button>
            </div>
            <div className='menu hidden md:block md:w-auto md:mr-4 lg:mr-24' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center justify-center'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <button 
                                    onClick={() => {
                                        if(link.path === '/'){
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth',
                                            });
                                        }
                                        else{
                                            const targetElement = document.querySelector(`#${link.path}`);
                                                if (targetElement) {
                                                window.scrollTo({
                                                    top: targetElement.offsetTop,
                                                    behavior: 'smooth',
                                                });
                                            }  
                                        }
                                    }}
                                    onMouseEnter={() => {setShowBar(true); setI(index)}}
                                    onMouseLeave={() => {setShowBar(false); setI(index)}}
                                >
                                    <div className='w-full relative'> 
                                        <p
                                            className={`
                                                block py-2 
                                                text-violet-700 
                                                font-bold 
                                                ${theme === "light" ? 
                                                    "sm:text-current sm:hover:text-violet-700" : 
                                                    "sm:text-[#d7dbdf]"
                                                } 
                                                sm:text-lg rounded
                                                md:p-0 
                                                ${theme === "dark" && "hover:text-white"}
                                            `}
                                            style={{
                                                '&:hover': {
                                                    color: {theme }
                                                }
                                            }}
                                        >
                                            {link.title}
                                        </p>
                                        <motion.div 
                                            className='absolute top-[30px] bg-violet-700 w-full'
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    width: '0%',
                                                    height: 2.5
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
                                                    width: '0%',
                                                    height: 2.5,
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
                    {toggleThemeComponent()}
                </ul>
            </div>
        </div>

        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    anchor={'right'}
                    open={isMobileDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {mobileDrawer('right')}
                </Drawer>
            </React.Fragment>
        </div>
    </nav>
  )
}

export default Navbar;