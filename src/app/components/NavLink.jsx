
const NavLink = ({ href, title, setNavbarOpen }) => {
  return (
    <a
        href={`#${href}`}
        className='block py-2 text-violet-700 sm:text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white'
        onClick={() => setNavbarOpen(false)}
    >
        {title}
    </a>
  )
}

export default NavLink;