import { 
  MY_GITHUB_PROFILE_URL,
  MY_LINKEDIN_PROFILE_URL,
  MY_TWITTER_PROFILE_URL,
  MY_YOUTUBE_PROFILE_URL,
  MY_CODEFORCES_PROFILE_URL,
  MY_LEETCODE_PROFILE_URL,
  MY_CODECHEF_PROFILE_URL,
  MY_GFG_PROFILE_URL,
  GITHUB_LOGO_URL,
  LINKEDIN_LOGO_URL,
  TWITTER_LOGO_URL,
  YOUTUBE_LOGO_URL,
  IITI_URL,
  IITI_LOGO_URL,
  SCHOOL_URL,
  SCHOOL_LOGO_URL,
  PROJECT_1_LOGO_URL,
  PROJECT_1_GITHUB_URL,
  PROJECT_1_LIVE_URL,
  PROJECT_2_LOGO_URL,
  PROJECT_2_GITHUB_URL,
  PROJECT_2_LIVE_URL,
  PROJECT_3_LOGO_URL,
  PROJECT_3_GITHUB_URL,
  SKILL_CPLUSPLUS_LOGO_URL,
  SKILL_PYTHON_LOGO_URL,
  SKILL_HTML_LOGO_URL,
  SKILL_CSS_LOGO_URL,
  SKILL_JS_LOGO_URL,
  SKILL_TS_LOGO_URL,
  SKILL_AWS_LOGO_URL,
  SKILL_DOCKER_LOGO_URL,
  SKILL_KUBERNETES_LOGO_URL,
  SKILL_GCP_LOGO_URL,
  SKILL_FIREBASE_LOGO_URL,
  SKILL_NODEJS_LOGO_URL,
  SKILL_REACTJS_LOGO_URL,
  SKILL_NEXTJS_LOGO_URL,
  SKILL_MONGODB_LOGO_URL,
  SKILL_FLASK_LOGO_URL,
  SKILL_MYSQL_LOGO_URL,
  SKILL_TAILWIND_LOGO_URL,
  SKILL_FRAMER_LOGO_URL,
  SKILL_THREEJS_LOGO_URL,
  SKILL_GIT_LOGO_URL,
  SKILL_GITHUB_LOGO_URL
} from "./url";

export const imageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${src}?w=${width}&q=${quality || 75}`;
};

export const myName = 'Chinmay';

export const aboutMeHeader = 'About Me';

export const aboutMe = `Hi, I'm Chinmay, a recent graduate from IIT Indore with a passion for web development and competitive programming. I'm a full stack developer specializing in MERN Stack along with the latest React frameworks like Next.js 14. I'm also famiiar with cloud computing services like AWS, Firebase etc. along with containerization tools like Docker. I have good grasp over Data Structures and Algorithms with excellent problem solving skills thanks to my competitive programming journey.`;

export const aboutMeText = 'Feel free to reach out to me at: ';

export const myEmail = 'rajchinmay08@gmail.com';

export const resume = 'Resume';

export const myLocation = 'Hyderabad, India';

export const subdomains = [
  'api'
];

export const profiles = [
  {
    url: MY_CODEFORCES_PROFILE_URL,
    title: 'CodeForces',
    description: 'Expert (max. rating: 1718)',
  },
  {
    url: MY_LEETCODE_PROFILE_URL,
    title: 'LeetCode',
    description: 'Knight, Top 3.5% (max. rating: 1950)',
  },
  {
    url: MY_CODECHEF_PROFILE_URL,
    title: 'CodeChef',
    description: '3 Stars (max. rating: 1641)',
  },
  {
    url: MY_GFG_PROFILE_URL,
    title: 'GeeksforGeeks',
    description: 'Solved 100+ DSA problems',
  },
];

export const codingProfileHeader = 'My Coding Profiles';

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

export const educationHeader = ' My Education';

export const educations = [
  {
    title: "B.Tech",
    name: "IIT Indore",
    icon: IITI_LOGO_URL,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Jul 2024",
    url: IITI_URL,
    points: [
      "Completed"
    ],
  },
  {
    title: "Senior Secondary and Secondary School",
    name: "Satyam International School | Christ Church Diocesan School",
    icon: SCHOOL_LOGO_URL,
    iconBg: "#383E56",
    date: "2018 - 2020",
    url: SCHOOL_URL,
    points: [
      "Completed"
    ],
  },
];

export const contact = 'Contact';

export const letConnect = "Let's Connect";

export const emailSectionBody = "I'm currently looking for Software Engineer roles, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!";

export const quickLinksHeader = 'Quick Links';

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

export const projectSectionHeader = 'My Projects';

export const projectsData = [
  {
    id: 1,
    title: "Ticketvibe",
    description: "An event ticketing platform made using MERN Stack for organization and booking of events with user authentication service. Utilized firebase storage to store user profile images and implemented Google OAuth 2.0 to enhance the security of the user login process",
    image: PROJECT_1_LOGO_URL,
    gitUrl: PROJECT_1_GITHUB_URL,
    previewUrl: PROJECT_1_LIVE_URL,
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
    image: PROJECT_2_LOGO_URL,
    gitUrl: PROJECT_2_GITHUB_URL,
    previewUrl: PROJECT_2_LIVE_URL,
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
    image: PROJECT_3_LOGO_URL,
    gitUrl: PROJECT_3_GITHUB_URL,
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

export const projectSectionBody = 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.'

export const skillSectionHeader = 'Skills';

export const skillsData = [
  {
    id: 1,
    title: "C++",
    path: SKILL_CPLUSPLUS_LOGO_URL,
  },
  {
    id: 2,
    title: "Python",
    path: SKILL_PYTHON_LOGO_URL,
  },
  {
    id: 3,
    title: "HTML5",
    path: SKILL_HTML_LOGO_URL,
  },
  {
    id: 4,
    title: "CSS3",
    path: SKILL_CSS_LOGO_URL,
  },
  {
    id: 5,
    title: "JavaScript",
    path: SKILL_JS_LOGO_URL,
  },
  {
    id: 6,
    title: "TypeScript",
    path: SKILL_TS_LOGO_URL,
  },
  {
    id: 7,
    title: "AWS",
    path: SKILL_AWS_LOGO_URL,
  },
  {
    id: 8,
    title: "Docker",
    path: SKILL_DOCKER_LOGO_URL,
  },
  {
    id: 9,
    title: "Kubernetes",
    path: SKILL_KUBERNETES_LOGO_URL,
  },
  {
    id: 10,
    title: "Google Cloud",
    path: SKILL_GCP_LOGO_URL,
  },
  {
    id: 11,
    title: "Firebase",
    path: SKILL_FIREBASE_LOGO_URL,
  },
  {
    id: 12,
    title: "NodeJs",
    path: SKILL_NODEJS_LOGO_URL,
  },
  {
    id: 13,
    title: "ReactJs",
    path: SKILL_REACTJS_LOGO_URL,
  },
  {
    id: 14,
    title: "NextJs",
    path: SKILL_NEXTJS_LOGO_URL,
  },
  {
    id: 15,
    title: "MongoDB",
    path: SKILL_MONGODB_LOGO_URL,
  },
  {
    id: 16,
    title: "Flask",
    path: SKILL_FLASK_LOGO_URL,
  },
  {
    id: 17,
    title: "MySQL",
    path: SKILL_MYSQL_LOGO_URL,
  },
  {
    id: 18,
    title: "TailwindCSS",
    path: SKILL_TAILWIND_LOGO_URL,
  },
  {
    id: 19,
    title: "Framer",
    path: SKILL_FRAMER_LOGO_URL,
  },
  {
    id: 20,
    title: "ThreeJs",
    path: SKILL_THREEJS_LOGO_URL,
  },
  {
    id: 21,
    title: "Git",
    path: SKILL_GIT_LOGO_URL,
  },
  {
    id: 22,
    title: "Github",
    path: SKILL_GITHUB_LOGO_URL,
  },
];

export const mailSent = 'Email sent successfully!';

export const yourMail = 'Your email';

export const subject = 'Subject';

export const message = 'Message';

export const sendMessage = 'Send Message';

export const forbiddenText = '403 Forbidden';