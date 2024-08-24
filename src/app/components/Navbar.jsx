"use client";
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { navLinks, myName } from '../constants';
import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const Navbar = () => {
    const [showBar, setShowBar] = useState(false);
    const [i, setI] = useState('');

    const [state, setState] = useState(false);
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };
    
    const list = () => (
        <Box
            sx={{ width: ((4 / 5) * window.screen.width) }}
            role="presentation"
        >
            <div className='w-full min-h-[100vh] bg-[#222]'>
                <button 
                    onClick={toggleDrawer(false)} 
                    className='absolute right-4 top-4 flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                >
                    <XMarkIcon className='h-5 w-5' />
                </button>

                <MenuOverlay links={navLinks} setState={setState} />

            </div>
        </Box>
    );

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 w-full bg-[#212121] bg-opacity-[93%] shadow-lg shadow-[#0c0c0c]'>
        <div className='h-[3px] w-full bg-[#222]' />
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <button 
                className='ml-8 my-2 lg:ml-28 text-lg md:text-xl text-white font-bold'
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
            > 
                <p className='head text-2xl' > { myName } </p>  
            </button>
            <div className='mobile-menu block md:hidden'>
                <button 
                    onClick={toggleDrawer(true)}
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                >
                    <Bars3Icon className='h-5 w-5' />
                </button>
            </div>
            <div className='menu hidden md:block md:w-auto md:mr-4 lg:mr-24' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
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
                                            className='block py-2 text-violet-700 sm:text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white'
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
                </ul>
            </div>
        </div>

        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    </nav>
  )
}

export default Navbar;