import React from 'react'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
import Footer from './Footer'
import { div } from 'framer-motion/client'


function submit(){
  return
  <div className='submitEvent'><p>thanks for submiting the form we will reach back shortly</p></div>
  console.log('submitted')
}
function ContactUs() {
  return (
    <>
    <motion.div
    className='contactPage'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration:0.1}}} >
        <div className="form-control">
        <form>
           <input type="text" placeholder='enter your name' />
           <input type="text" placeholder='enter your phone number' />
           <input type="text" placeholder='enter your city' />
           <input type="submit" onClick={submit()} />
        </form>
        </div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default ContactUs;