"use client";
import React from 'react';
import SkillCard from './SkillCard';

import { easeInOut, easeOut, motion, spring } from 'framer-motion';
import { skillsData } from '../constants';

const SkillsSection = () => {
  return (
    <section className='text-white sm:mb-36' id='skills'>
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full mb-16 lg:mb-28 md:mr-2'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'> 
          Skills
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-8 xl:gap-12'>
          {
            skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    x: -100,
                    y: 0,
                    opacity: 0
                  },
                  visible: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      duration: 0.5,
                      delay: 0.15 * index,
                      ease: easeOut
                    }
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                initial= 'hidden'
                whileInView='visible'
                viewport={{ amount: 0.25 }}
              >
                <SkillCard key={skill.id} title={skill.title} url={skill.path} />   
              </motion.div>
            ))
          }
        </div>  
      </div>
      
    </section>
  )
}

export default SkillsSection