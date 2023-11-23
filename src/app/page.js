"use client";
import Image from 'next/image';
import { Suspense, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import EmailSection from './components/EmailSection.jsx';
import Footer from './components/Footer.jsx';


import { motion, useScroll, useSpring } from "framer-motion";
import Loading from '@/app/loading';


export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <div 
            className='min-h-[100vh]'
            style={{ background: `url(/images/herobg.png) no-repeat center center/cover` }}
          >
            <Navbar/>
            <div className='container mt-24 mx-auto pl-[36px] pr-[36px] md:px-12 py-4 flex'> <HeroSection/> </div>   
          </div>
          
          
            <div className='container mt-24 mx-auto pl-[36px] pr-[36px] md:px-12 py-4'>
              <AboutSection/>
              <SkillsSection/>
              <EducationSection/>
              <ProjectsSection/>
              <EmailSection/>
              <Footer/>
            </div>  
        </main>
      </Suspense>
    </>
  )
}
