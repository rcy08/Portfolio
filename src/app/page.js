"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import EmailSection from './components/EmailSection.jsx';
import Footer from './components/Footer.jsx';

import Loader from './components/Loader';

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

  return (
    <>
        {
          loading ? <Loader /> :

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

        }
  
    </>
  )
}
