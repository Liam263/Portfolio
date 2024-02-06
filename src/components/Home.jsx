import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";

const Home = () => {
  return (
    <div name= "home" className=' w-full h-screen bg-[#0a1927]'>
        {/* Intro Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-200'>
            <p className='text-4xl font-bold text-blue-500'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold'>Lam Nguyen</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0] max-w-[800px]'>A final-year student pursuing a Bachelor of Computer Science at the University of Wollongong.</h2>
            <p className='text-[#8892b0] py-4 max-w-[800px]'>I am a responsible and motivated individual with a strong foundation in programming languages 
                such as Javascript, Java, HTML, CSS, and SQL. I have achieved stellar academic results across my degree, 
                scoring in the top 5% of my class and receiving a Dean’s Merit List award, I have started applying 
                my knowledge in small freelance projects and I am eager to more broadly apply this knowledge in 
                a professional industry, especially in areas such as Web development and Big Data.</p>
            
            <div>
                <button className='group flex border-2 px-6 py-3 my-2 items-center hover:bg-blue-500 hover:border-blue-500'>
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <TiArrowRightThick className='ml-3 ' />
                </span>
                </button>
            </div>
        </div>
       
    </div>
  )
}

export default Home