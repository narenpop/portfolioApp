import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {motion} from 'framer-motion'
import hero from './images/hero.png'

function Home() {
  return (
    <motion.div className='homepage'
           initial={{width:0}}
           animate={{width:"100%"}}
           exit={{x: window.innerWidth, transition:{duration:0.1}}}     >
          <div className='hero-content'>
          <h1>hello guys! welcome to my page, 
            I am a front end developer with 3 years of handsOn experience
            in react JS.
          </h1>
          <img src={hero} width={180} alt="" />
        </div>
        <Footer/>
    </motion.div>
  )
}
export default Home;
