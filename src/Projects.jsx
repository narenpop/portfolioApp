import React from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
import todo from './images/todo.png'
import ecom from './images/ecom.png'
import Footer from './Footer'
function Projects() {
  return (
    <>
    <motion.div className='projectPage'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration:0.1}}}    >
       <div className='projects'>
        <div>
          <img src={todo} width={180} alt="" />
        </div>
        <div>
          <img src={ecom} width={180} alt="" />
        </div>
        <div>
         <img src={ecom} width={180} alt="" /> 
        </div>
        <div>
        <img src={ecom} width={180} alt="" />
        </div>
       </div>
    </motion.div>
    <Footer />
    </>
  )
}
export default Projects;
