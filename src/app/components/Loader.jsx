"use client";
import Image from 'next/image';

import { imageLoader } from '../constants';

const Loader = () => {
  return (
    <div
      className='bg-white flex w-[100vw] h-[100vh] justify-center items-center'
    >
      <Image 
        loader={imageLoader}
        src={'assets/icons/loader.webp'}
        alt='Loading...'  
        width={300}
        height={300}
      />
    </div>
  )
}

export default Loader