import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title }) => {
  return (
    <Link
        href={`/${href}`}
        className='block py-2 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white'
    >
        {title}
    </Link>
  )
}

export default NavLink