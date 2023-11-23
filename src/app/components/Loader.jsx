import React from 'react'

import Image from 'next/image'
import LoadingIcon from '../../../public/loading.gif';

const Loader = () => {
  return (
    <div
      className='bg-[#101424] flex w-[100vw] h-[100vh] justify-center items-center'
    >
      <Image src={LoadingIcon} alt='Loading...' />
    </div>
  )
}

export default Loader