import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  cpp,
  nextjs,
  mui,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  caseCobra,
  messanger,
  messangerNextjs,
  admin,
  threeD
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: nextjs,
  },
  {
    name: "docker",
    icon: mui,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce",
    description:
      "Fullstack ecommerce project with admin dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce1,
    source_code_link: "https://github.com/mehdi000777/mern-ecommerce",
    web_link: "https://mern-ecommerce-rqc0.onrender.com"
  },
  {
    name: "EShop",
    description:
      "Fullstack ecommerce project",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce2,
    source_code_link: "https://github.com/mehdi000777/mern-ecommerce-2",
    web_link: "https://mern-ecommerce-2-1.onrender.com"
  },
  {
    name: "Shop",
    description:
      "frontend ecommerce project",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce3,
    source_code_link: "https://github.com/mehdi000777/fractal-frontend",
    web_link: "https://fractal-frontend-ten.vercel.app/"
  },
  {
    name: "Ecommerce-fullstack",
    description:
      "Fullstack mern ecommerce project with admin dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce4,
    source_code_link: "https://github.com/mehdi000777/EShop-fullstack",
    web_link: "https://eshop-fullstack-front.onrender.com/"
  },
  {
    name: "caseCobra",
    description:
      "A project to customize the phone case and order it",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: caseCobra,
    source_code_link: "https://github.com/mehdi000777/caseCobra-dev",
    web_link: "https://case-cobra-dev-8xdb.vercel.app/"
  },
  {
    name: "Messanger",
    description:
      "A fullstack mern messange web app",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ridux toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: messanger,
    source_code_link: "https://github.com/mehdi000777/messanger-react-redux",
    web_link: "https://messanger-front.onrender.com"
  },
  {
    name: "Messanger-Nextjs",
    description:
      "A fullstack nextjs messange web app",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: messangerNextjs,
    source_code_link: "https://github.com/mehdi000777/nextjs-chatapp",
    web_link: "https://nextjs-chatapp-three.vercel.app"
  },
  {
    name: "Admin Dashbord",
    description:
      "A fullstack mern admin dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "matrial ui",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/mehdi000777/adminDashboard",
    web_link: "https://admindashboard-front.onrender.com"
  },
  {
    name: "3d Engin",
    description:
      "A 3d Engin with vanila javascript",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      }
    ],
    image: threeD,
    source_code_link: "https://github.com/mehdi000777/3dEnginJS",
    web_link: "https://github.com/mehdi000777/3dEnginJS"
  },
];

export { services, technologies, experiences, testimonials, projects };
