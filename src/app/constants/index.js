
export const imageLoader = ({ src, width, quality }) => {
  return `https://rc08.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

export const profiles = [
  {
      url: 'https://codeforces.com/profile/rc08',
      title: 'CodeForces',
      description: 'Pupil (max. rating: 1362)',
  },
  {
      url: 'https://leetcode.com/rc08',
      title: 'LeetCode',
      description: 'Top 6% (max. rating: 1890)',
  },
  {
      url: 'https://codechef.com/users/rcy08',
      title: 'CodeChef',
      description: '3 Stars (max. rating: 1641)',
  },
  {
      url: 'https://auth.geeksforgeeks.org/user/rc08',
      title: 'GeeksforGeeks',
      description: 'Solved 100+ DSA problems',
  },
];

export const TiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

export const educations = [
  {
      title: "B.Tech",
      name: "IIT Indore",
      icon: 'assets/images/education/iiti.png',
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Present",
      url: 'https://iiti.ac.in',
      points: [
        "Final Year"
      ],
  },
  {
      title: "Senior Secondary and Secondary School",
      name: "Satyam International School | Christ Church Diocesan School",
      icon: 'assets/images/education/school.png',
      iconBg: "#383E56",
      date: "2018 - 2020",
      url: 'https://www.satyaminternationalpatna.com',
      points: [
        "Completed"
      ],
  },
];

export const quickLinks = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: 'about',
    title: 'About'
  },
  {
    url: 'skills',
    title: 'Skills'
  },
  {
    url: 'education',
    title: 'Education'
  },
  {
    url: 'projects',
    title: 'Projects'
  },
  {
    url: 'contact',
    title: 'Contact'
  },
];
  
export const socialLinks = [
  {
    id: 1,
    url: 'https://github.com/rcy08',
    path: 'assets/icons/github-icon.svg'
  },
  {
    id: 2,
    url: 'https://linkedin.com/in/rcy08',
    path: 'assets/icons/linkedin-icon.png'
  },
  {
    id: 3,
    url: 'https://twitter.com/_rcy08_',
    path: 'assets/icons/twitter-icon.png'
  },
  {
    id: 4,
    url: 'https://www.youtube.com/@rcy08_',
    path: 'assets/icons/youtube-icon.png'
  },
];

export const navLinks = [
  {
    title: "About",
    path: "about"
  },
  {
    title: "Skills",
    path: "skills"
  },
  {
    title: "Education",
    path: "education"
  },
  {
    title: "Projects",
    path: "projects"
  },
  {
    title: "Contact",
    path: "contact"
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Ticketvibe",
    description: "An event ticketing platform made using MERN Stack for organization and booking of events with user authentication service. Utilized firebase storage to store user profile images and implemented Google OAuth 2.0 to enhance the security of the user login process",
    image: '/assets/images/projects/ticketvibe.png',
    gitUrl: "https://github.com/rcy08/Event-Ticketing-Platform",
    previewUrl: "https://ticketvibe.vercel.app",
    tags: [
      {
        name: "nodejs",
        color: "font-bold text-pink-700",
      },
      {
        name: "reactjs",
        color: "font-bold text-violet-700",
      },
      {
        name: "mongodb",
        color: "font-bold text-green-700",
      },
    ]
  },
  {
    id: 2,
    title: "Chatvibe",
    description: "A social media app with user authentication and profile management enabling users to create threads, communities, and engage in various interactions including likes, comments, replies, reposts, activities and shares for enhanced user experience.",
    image: '/assets/images/projects/chatvibe.png',
    gitUrl: "https://github.com/rcy08/Social-Media-App",
    previewUrl: "https://chatvibe.vercel.app",
    tags: [
      {
        name: "next.js",
        color: "font-bold text-pink-700",
      },
      {
        name: "typescript",
        color: "font-bold text-violet-700",
      },
      {
        name: "mongodb",
        color: "font-bold text-green-700",
      },
    ]
  },
  {
    id: 3,
    title: "Fashion Wear",
    description: "An online clothes shopping web application where users can select clothes of their choice and buy them after adding into the cart. User side for customers and admin side with features of deleting user accounts and managing verification requests.",
    image: '/assets/images/projects/fashionwear.png',
    gitUrl: "https://github.com/rcy08/Fashion-Wear",
    previewUrl: "/",
    tags: [
      {
        name: "flask",
        color: "font-bold text-pink-700",
      },
      {
        name: "python",
        color: "font-bold text-violet-700",
      },
      {
        name: "mysql",
        color: "font-bold text-green-700",
      },
    ]
  },
];

export const skillsData = [
  {
    id: 1,
    title: "C++",
    path: 'assets/images/skills/C++.png',
  },
  {
    id: 2,
    title: "Python",
    path: 'assets/images/skills/python.png',
  },
  {
    id: 3,
    title: "HTML5",
    path: 'assets/images/skills/html.png',
  },
  {
    id: 4,
    title: "CSS3",
    path: 'assets/images/skills/css.png',
  },
  {
    id: 5,
    title: "JavaScript",
    path: 'assets/images/skills/javascript.png',
  },
  {
    id: 6,
    title: "TypeScript",
    path: 'assets/images/skills/typescript.png',
  },
  {
    id: 7,
    title: "AWS",
    path: 'assets/images/skills/aws.png',
  },
  {
    id: 8,
    title: "Docker",
    path: 'assets/images/skills/docker.png',
  },
  {
    id: 9,
    title: "Google Cloud",
    path: 'assets/images/skills/gcp.png',
  },
  {
    id: 10,
    title: "Firebase",
    path: 'assets/images/skills/firebase.png',
  },
  {
    id: 11,
    title: "NodeJs",
    path: 'assets/images/skills/nodejs.png',
  },
  {
    id: 12,
    title: "ReactJs",
    path: 'assets/images/skills/reactjs.png',
  },
  {
    id: 13,
    title: "NextJs",
    path: 'assets/images/skills/nextjs.svg',
  },
  {
    id: 14,
    title: "MongoDB",
    path: 'assets/images/skills/mongodb.png',
  },
  {
    id: 15,
    title: "SQL",
    path: 'assets/images/skills/sql.png',
  },
  {
    id: 16,
    title: "TailwindCSS",
    path: 'assets/images/skills/tailwind.png',
  },
  {
    id: 17,
    title: "Framer",
    path: 'assets/images/skills/framer.png',
  },
  {
    id: 18,
    title: "ThreeJs",
    path: 'assets/images/skills/three.png',
  },
  {
    id: 19,
    title: "Git",
    path: 'assets/images/skills/git.png',
  },
  {
    id: 20,
    title: "Github",
    path: 'assets/images/skills/github.png',
  },
];