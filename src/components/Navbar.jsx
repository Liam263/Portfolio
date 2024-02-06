import React, { useState } from 'react'
import avatar from '../assets/avatar.jpeg'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsPersonLinesFill } from "react-icons/bs";

import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-scroll'
const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={avatar} alt="Avatar" className='rounded-full' style={{ width: '50px' }} />
            </div>

            {/* desktop menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link activeClass="active" to="home" smooth={true} offset={50} duration={500}>
                        Home 
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="about" smooth={true} offset={50} duration={500}>
                        About 
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="skills" smooth={true} offset={50} duration={500}>
                        Skills 
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="work" smooth={true} offset={50} duration={500}>
                        Works 
                    </Link>
                </li>
                
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className=' md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : '   absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons */}

            <div className=" hidden md:flex fixed flex-col top-[35%]  left-0">
                <ul >
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/lamnguyen2002/"> Linkedin <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Liam263"> GitHub <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/lamnguyen2002/"> Email <HiOutlineMail size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/lamnguyen2002/"> Resume <BsPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar