"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

import { easeOut, motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const TiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const projectsData = [
  {
    id: 1,
    title: "Ticketvibe",
    description: "An event ticketing platform for organization and booking of events with user and admin authentication service",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/rcy08/Event-Ticketing-Platform",
    previewUrl: "https://ticketvibe.vercel.app",
    tags: [
      {
        name: "react",
        color: "font-bold text-pink-700",
      },
      {
        name: "mongodb",
        color: "font-bold text-violet-700",
      },
      {
        name: "tailwind",
        color: "font-bold text-green-700",
      },
    ]
  },
  {
    id: 2,
    title: "Fashion Wear",
    description: "An online clothes shopping web application where users can select clothes of their choice and buy them after adding into the cart. User side for customers and admin side with features of deleting user accounts and managing verification requests.",
    image: "/images/projects/fashionwear.png",
    gitUrl: "https://github.com/rcy08/Fashion-Wear",
    previewUrl: "/",
    tags: [
      {
        name: "flask",
        color: "font-bold text-pink-700",
      },
      {
        name: "python",
        color: "font-bold text-violet-700",
      },
      {
        name: "mysql",
        color: "font-bold text-green-700",
      },
    ]
  },
  {
    id: 3,
    title: "Handwritten Digit Classification",
    description: "Implementation is done in tensorflow. Input image are compressed using numpy. Accuracy of 95% on testing data.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/rcy08/Handwritten-Digit-Classification",
    previewUrl: "/",
    tags: [
      {
        name: "tensorflow",
        color: "font-bold text-pink-700",
      },
    ]
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
    
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "font-bold text-pink-700",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "font-bold text-violet-700",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "font-bold text-green-700",
  //     },
  //   ]
  // },
];

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

export default ProjectsSection