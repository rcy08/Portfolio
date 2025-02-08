"use client";

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import EmailSection from './components/EmailSection.jsx';
import Footer from './components/Footer.jsx';

import { easeInOut, motion } from 'framer-motion';
import Loader from './components/Loader';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  const [atTop, setAtTop] = useState(true);

  if (!loading) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        if (atTop) setAtTop(!atTop);
      }
      else {
        if (!atTop) setAtTop(!atTop);
      }
    });
  }

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {
        loading ? <Loader /> :

          <>

            <div className={`fixed top-0 left-0 h-[4px] bg-violet-700 z-30`} style={{ width: `${scrollPercentage}%` }} />

            <main className={`flex min-h-screen flex-col`}>

              <div
                className='min-h-[100vh]'
              >
                <Navbar 
                  atTop={atTop}
                />
                <div className='container mt-24 mx-auto pl-[36px] pr-[36px] md:px-12 py-4 flex'> <HeroSection /> </div>
              </div>

              <div className='container mt-24 mx-auto pl-[36px] pr-[36px] md:px-12 py-4'>
                <AboutSection />
                <SkillsSection />
                <EducationSection />
                <ProjectsSection />
                <EmailSection />
                <Footer />
              </div>

              {

                !atTop &&

                <motion.button
                  className='fixed bottom-8 right-8 sm:bottom-16 sm:right-16 bg-purple-600 p-2 rounded-full'
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -(window.screen.height - 64),
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        type: 'tween',
                        ease: easeInOut
                      }
                    }
                  }}
                  initial='hidden'
                  animate='show'
                >
                  <KeyboardArrowUpIcon className='scale-[150%] rounded-full text-white' />
                </motion.button>

              }

            </main>

          </>

      }

    </>
  )
}
