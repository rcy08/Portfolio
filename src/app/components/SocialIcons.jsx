import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';

const SocialIcons = ({ url, icon }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1
      }}
    >
      <Link href={url} target='_blank' > <Image src={icon} alt='Social-Icon' className='w-[52px] h-[52px]' /> </Link>
    </motion.div>
  )
}

export default SocialIcons;