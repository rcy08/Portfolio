import React from 'react';
import Image from 'next/image';

const SkillCard = ({ title, url }) => {
  return (
    <div className='flex flex-col justify-center items-center hover:bg-[#181434] rounded-xl sm:ml-0 sm:mr-0 ml-[8px] mr-[8px]'>
        <Image src={url} alt='Skill-Image' width={50} height={50} className='mb-8 mt-4' />
        <div className='text-white font-semibold mb-4'>
          {title}
        </div>
    </div>
  )
}

export default SkillCard