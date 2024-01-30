import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { imageLoader } from '../constants';

const SocialIcons = ({ url, icon }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1
      }}
    >
      <Link href={url} target='_blank' > 
        <Image 
          loader={imageLoader}
          src={icon} 
          alt='Social-Icon' 
          width={52}
          height={52}
        /> 
      </Link>
    </motion.div>
  )
}

export default SocialIcons;