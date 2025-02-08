import { motion } from 'framer-motion';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MY_GITHUB_PROFILE_URL, MY_LINKEDIN_PROFILE_URL } from '../constants/url';

export const socialLinks = [
  {
    id: 1,
    url: MY_GITHUB_PROFILE_URL,
    icon: <GitHubIcon className='scale-[140%]' />
  },
  {
    id: 2,
    url: MY_LINKEDIN_PROFILE_URL,
    icon: <LinkedInIcon className='scale-[140%]' />
  },
];

const SocialIcons = ({ url, icon }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1
      }}
    >
      <button 
        onClick={() => window.open(url, '_blank')}
      > 
        {icon}
      </button>
    </motion.div>
  )
}

export default SocialIcons;