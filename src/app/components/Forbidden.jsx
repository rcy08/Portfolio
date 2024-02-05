import React from 'react';
import Head from 'next/head';

const Forbidden = () => {
  return (
    <>
        <Head>
            <title> 403 Forbidden </title>
        </Head>

        <div className='bg-white h-[100vh] text-black text-center'>
            <p className='font-semibold text-[28px] py-2'> 403 {"  "} Forbidden </p> 
            <hr className='bg-black' />
        </div>
    </>
  )
};

export default Forbidden;