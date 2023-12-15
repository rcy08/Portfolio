import React from 'react'

import Image from 'next/image'
import LoadingIcon from '../../../public/loader.gif';

const Loader = () => {
  return (
    <div
      className='bg-white flex w-[100vw] h-[100vh] justify-center items-center'
    >
      <Image src={LoadingIcon} alt='Loading...'  />
    </div>
  )
}

export default Loader