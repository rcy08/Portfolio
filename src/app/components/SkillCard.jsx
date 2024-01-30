"use client";
import Image from 'next/image';

import { imageLoader } from 'next/image';

const SkillCard = ({ title, url }) => {
  return (
    <div className='flex flex-col justify-between items-center hover:bg-[#181434] hover:shadow-lg hover:shadow-[#413c64] rounded-xl sm:ml-0 sm:mr-0 ml-[8px] mr-[8px] h-[150px]'>
      <Image 
        loader={imageLoader}
        src={url} 
        alt='Skill-Image' 
        width={50} 
        height={50} 
        className='mb-8 mt-4' 
      />
      <div className='text-white font-semibold mb-4'>
        {title}
      </div>
    </div>
  )
}

export default SkillCard;