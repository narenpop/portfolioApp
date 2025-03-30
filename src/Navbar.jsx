import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='flex justify-between p-3'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contact"><li>contact</li></Link>
        </ul>
    </div>
  )
}

