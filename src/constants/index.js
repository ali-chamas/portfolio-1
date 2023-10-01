import {
  mobile,
  universus,photographer,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  dropifyy,
  tailwind,
  nodejs,
  mongodb,
  git,
java,
  mysql,
  Cars,
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
  {
    name: "Car Showcase",
    description:
      "Search for your desired brands and learn about available cars, the car informations are fetched from a fake json data that I made",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Cars,
    source_code_link: "https://github.com/watwatos/car-display",
    web_link:"https://car-display-sigma.vercel.app/",
  },{
    name: "Dropify",
    description:
      "A full stack delivery app where you can create an account and order a delivery, manage the orders as an admin at admin@admin.com password:password",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: dropifyy,
    source_code_link: "https://github.com/watwatos/dropify-deliver-website",
    web_link:"https://dropify-hazel.vercel.app/"
  }

];

export { services, technologies, projects };
