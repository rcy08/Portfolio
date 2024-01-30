import React from 'react';
import NavLink from './NavLink';
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
                <NavLink href={link.path} title={link.title} setNavbarOpen={setNavbarOpen} />
              </motion.li>
          ))
      }
    </ul>
  )
}

export default MenuOverlay