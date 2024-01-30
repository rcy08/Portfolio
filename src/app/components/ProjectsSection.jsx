"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

import { easeOut, motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { TiltOptions, projectsData } from '../constants';

const ProjectsSection = () => {
  return (
    <section id='projects' className='text-white min-h-[100vh] flex flex-col justify-center items-center'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-16'> 
            My Projects 
        </h2>

        <p className='mb-16 md:w-5/6 ml-4 mr-4 text-left sm:text-center'>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>

        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-28 xl:gap-20'>
            {
              projectsData.map((project, index) => (

                <motion.div
                  key={index}
                  className=''
                  variants={{
                    hidden: {
                      y: 100,
                      opacity: 0
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: 'tween',
                        duration: 0.5,
                        delay: 0.5 * index,
                        ease: easeOut
                      }
                    }
                  }}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.005 }}
                >

                  <Tilt 
                    options={TiltOptions} 
                    className='bg-[#181434] md:p-[10px] lg:p-[20px] px-4 py-2 w-[300px] lg:w-[375px] xl:w-[325px] mb-8 rounded-xl'
                  >
                      <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        tags={project.tags}
                      />  
                    
                  </Tilt>    

                </motion.div>

              ))
            }
        </div>
    </section>
  )
}

export default ProjectsSection;