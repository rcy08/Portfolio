"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

import { easeOut, motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { TiltOptions, projectSectionHeader, projectsData, projectSectionBody } from '../constants';

import CodeIcon from '@mui/icons-material/Code';

const ProjectsSection = () => {
  return (
    <section id='projects' className='min-h-[100vh] flex flex-col justify-center items-center'>
        <h2 className='text-center text-4xl font-bold mt-4 mb-8 md:mb-16'> 
          <CodeIcon className='scale-[225%] mr-5 pb-[2px]' />
          { projectSectionHeader } 
        </h2>

        <p className='mb-16 md:w-5/6 ml-4 mr-4 text-left sm:text-center'>
          { projectSectionBody }
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