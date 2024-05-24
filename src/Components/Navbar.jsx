import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center bg-slate-900 justify-between text-white">
        <Link className='font-sans' to="/">Sagar</Link>
        <ul>
            <li className="">
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
