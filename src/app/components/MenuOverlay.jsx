import React from 'react';
import { easeInOut, motion, spring } from 'framer-motion';

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {
        links.map((link, index) => (
            <motion.li 
              key={index}
              variants={{
                hidden: {
                    opacity: 0,
                    y: -50
                },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: spring,
                        delay: 0.12 * index,
                        duration: 0.3,
                        stiffness: 600,
                        damping: 10,
                        ease: easeInOut
                    }
                }
              }}
              initial='hidden'
              animate='show'
            >
              <button
                onClick={() => {
                  setNavbarOpen(false);
                  const targetElement = document.querySelector(`#${link.path}`);
                    if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth',
                    });
                  }
                }}
              >
                <p
                  className='block py-2 text-violet-700 sm:text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white'
                >
                    {link.title}     
                </p>
              </button>
            </motion.li>
        ))
      }
    </ul>
  )
}

export default MenuOverlay