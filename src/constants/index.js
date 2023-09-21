import {
  mobile,
  universus,photographer,
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
java,
  mysql,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  nextjs,
  
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
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
    title: "Java Developer",
    icon: mobile,
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
    name: "Next JS",
    icon: nextjs,
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
    name: "git",
    icon: git,
  },
 
  {
    name: "Java",
    icon: java,
  },
  {name:"Mysql",icon:mysql}
];



const projects = [
  {
    name: "Universus",
    description:
      "Universus is a website, made for fun, that allows you to explore planets in the universus world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: universus,
    source_code_link: "https://github.com/watwatos/universus",
    web_link:"https://universus.vercel.app/",
  },
  {
    name: "Photographer portfolio",
    description:
      "A concept portfolio made for photographers, this website was a figma concept design that I found and admired, so I decided to turn it into reality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: photographer,
    source_code_link: "https://github.com/watwatos/photographer-website",
    web_link:"https://photographer-website-beta.vercel.app/",
  },

];

export { services, technologies, projects };
