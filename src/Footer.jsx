import React from 'react'
import { FaLinkedin,FaGithubAlt,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <Link to={`https://www.linkedin.com/in/naren-s-31aa29147/`}><FaLinkedin className='icon'/></Link>
        <Link to={`https://github.com/narenpop`}><FaGithubAlt className='icon' /></Link>
        <Link to={`https://www.instagram.com/_naren96/#`}><FaInstagram className='icon' /></Link>
      </div>
    </div>
  )
}
