
export const imageLoader = ({ src, width, quality }) => {
  return `https://rc08-s3.s3.ap-south-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`;
};

export const aboutMe = `Hi, I'm Chinmay, a final year UG student at IIT Indore with a passion for web development and competitive programming. I'm a full stack developer specializing in MERN Stack along with the latest React frameworks like Next.js 14. I'm also famiiar with cloud computing services like AWS, Firebase etc. along with containerization tools like Docker. I have good grasp over Data Structures and Algorithms with excellent problem solving skills thanks to my competitive programming journey.`;

export const subdomains = [
  'cdn'
];

export const profiles = [
  {
      url: 'https://codeforces.com/profile/rc08',
      title: 'CodeForces',
      description: 'Expert (max. rating: 1718)',
  },
  {
      url: 'https://leetcode.com/rc08',
      title: 'LeetCode',
      description: 'Knight, Top 3.5% (max. rating: 1950)',
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
      icon: 'static/images/education/iiti.webp',
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
      icon: 'static/images/education/school.webp',
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
    path: 'static/icons/github-icon.svg'
  },
  {
    id: 2,
    url: 'https://linkedin.com/in/rcy08',
    path: 'static/icons/linkedin-icon.webp'
  },
  {
    id: 3,
    url: 'https://twitter.com/_rcy08_',
    path: 'static/icons/twitter-icon.webp'
  },
  {
    id: 4,
    url: 'https://www.youtube.com/@rcy08_',
    path: 'static/icons/youtube-icon.webp'
  },
];

export const navLinks = [
  {
    title: "Home",
    path: "/"
  },
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
    image: '/static/images/projects/ticketvibe.webp',
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
    image: '/static/images/projects/chatvibe.webp',
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
    image: '/static/images/projects/fashionwear.webp',
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
    path: 'static/images/skills/C%2B%2B.svg',
  },
  {
    id: 2,
    title: "Python",
    path: 'static/images/skills/python.svg',
  },
  {
    id: 3,
    title: "HTML5",
    path: 'static/images/skills/html.svg',
  },
  {
    id: 4,
    title: "CSS3",
    path: 'static/images/skills/css.svg',
  },
  {
    id: 5,
    title: "JavaScript",
    path: 'static/images/skills/javascript.svg',
  },
  {
    id: 6,
    title: "TypeScript",
    path: 'static/images/skills/typescript.svg',
  },
  {
    id: 7,
    title: "AWS",
    path: 'static/images/skills/aws.svg',
  },
  {
    id: 8,
    title: "Docker",
    path: 'static/images/skills/docker.svg',
  },
  {
    id: 9,
    title: "Kubernetes",
    path: 'static/images/skills/kubernetes.svg',
  },
  {
    id: 10,
    title: "Google Cloud",
    path: 'static/images/skills/gcp.svg',
  },
  {
    id: 11,
    title: "Firebase",
    path: 'static/images/skills/firebase.svg',
  },
  {
    id: 12,
    title: "NodeJs",
    path: 'static/images/skills/nodejs.svg',
  },
  {
    id: 13,
    title: "ReactJs",
    path: 'static/images/skills/react.svg',
  },
  {
    id: 14,
    title: "NextJs",
    path: 'static/images/skills/nextjs2.svg',
  },
  {
    id: 15,
    title: "MongoDB",
    path: 'static/images/skills/mongodb.svg',
  },
  {
    id: 16,
    title: "Flask",
    path: 'static/images/skills/flask.svg',
  },
  {
    id: 17,
    title: "MySQL",
    path: 'static/images/skills/sql.svg',
  },
  {
    id: 18,
    title: "TailwindCSS",
    path: 'static/images/skills/tailwind.svg',
  },
  {
    id: 19,
    title: "Framer",
    path: 'static/images/skills/framer.svg',
  },
  {
    id: 20,
    title: "ThreeJs",
    path: 'static/images/skills/three.svg',
  },
  {
    id: 21,
    title: "Git",
    path: 'static/images/skills/git.svg',
  },
  {
    id: 22,
    title: "Github",
    path: 'static/images/skills/github.webp',
  },
];