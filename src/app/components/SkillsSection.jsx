"use client";
import React from 'react';
import SkillCard from './SkillCard';

import { easeInOut, easeOut, motion, spring } from 'framer-motion';

const skillsData = [
  {
    id: 1,
    title: "C++",
    image: "/images/skills/C++.png",
  },
  {
    id: 2,
    title: "Python",
    image: "/images/skills/python.png",
  },
  {
    id: 3,
    title: "HTML5",
    image: "/images/skills/html.png",
  },
  {
    id: 4,
    title: "CSS3",
    image: "/images/skills/css.png",
  },
  {
    id: 5,
    title: "JavaScript",
    image: "/images/skills/javascript.png",
  },
  {
    id: 6,
    title: "TypeScript",
    image: "/images/skills/typescript.png",
  },
  {
    id: 7,
    title: "Google Cloud",
    image: "/images/skills/gcp.png",
  },
  {
    id: 8,
    title: "Firebase",
    image: "/images/skills/firebase.png",
  },
  {
    id: 9,
    title: "NodeJs",
    image: "/images/skills/nodejs.png",
  },
  {
    id: 10,
    title: "ReactJs",
    image: "/images/skills/reactjs.png",
  },
  {
    id: 11,
    title: "NextJs",
    image: "/images/skills/nextjs.svg",
  },
  {
    id: 12,
    title: "MongoDB",
    image: "/images/skills/mongodb.png",
  },
  {
    id: 13,
    title: "SQL",
    image: "/images/skills/sql.png",
  },
  {
    id: 14,
    title: "TailwindCSS",
    image: "/images/skills/tailwind.png",
  },
  {
    id: 15,
    title: "Framer",
    image: "/images/skills/framer.png",
  },
  {
    id: 16,
    title: "ThreeJs",
    image: "/images/skills/three.png",
  },
  {
    id: 17,
    title: "Git",
    image: "/images/skills/git.png",
  },
  {
    id: 18,
    title: "Github",
    image: "/images/skills/github.png",
  },
];

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
                <SkillCard key={skill.id} title={skill.title} url={skill.image} />   
              </motion.div>
            ))
          }
        </div>  
      </div>
      
    </section>
  )
}

export default SkillsSection