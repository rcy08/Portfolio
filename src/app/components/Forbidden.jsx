import React from 'react';
import Head from 'next/head';

import { forbiddenText } from '../constants';

const Forbidden = () => {
  return (
    <>
      <Head>
        <title> {forbiddenText} </title>
      </Head>

      <div className='bg-white h-[100vh] text-black text-center'>
          <p className='font-semibold text-[28px] py-2'> 
            { forbiddenText }
          </p> 
          <hr className='bg-black' />
      </div>
    </>
  )
};

export default Forbidden;