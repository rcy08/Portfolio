import Link from 'next/link';
import React from 'react';
import { easeInOut, motion, spring } from 'framer-motion';

const NavLink = ({ href, title, setNavbarOpen }) => {
  return (
    <a
        href={`#${href}`}
        className='block py-2 sm:text-lg rounded md:p-0 text-violet-700'
        onClick={() => setNavbarOpen(false)}
    >
        {title}
    </a>
  )
}

export default NavLink;