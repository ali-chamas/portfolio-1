import { motion } from "framer-motion";

import { styles } from "../styles";
import {BiSolidDownload} from 'react-icons/bi'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Ali Chamas.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Ali Chamas.pdf';
            alink.click();
        })
    })
}

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <motion.div animate={{y:0}} initial={{y:50}} transition={{type:'spring',stiffness:70,delay:0.3}} className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-red-400' />
          <div className='w-1 sm:h-80 h-40 bg-red-400' />
        </motion.div>

        <motion.div animate={{opacity:1,x:0}} initial={{opacity:0,x:50 }} transition={{type:'spring',stiffness:70}}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-red-400'>Ali</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop  user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </motion.div>

        
      </div>


        

      <div className='absolute xs:bottom-32  w-full flex justify-center items-center'>
       
      <button onClick={onButtonClick} class="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300 ">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative flex gap-2 items-center text-lg"><BiSolidDownload/> Resume</span>
</button>
      </div>
    </section>
  );
};

export default Hero;
