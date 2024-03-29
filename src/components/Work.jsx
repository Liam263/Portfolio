import React from 'react'
import Loading from '../assets/Loading.jpeg'
import MusicBand from '../assets/MusicBand.png'
import WeatherApp from '../assets/Weather_App.png'

const Work = () => {
  return (
    <div name = "work" className='w-full md:h-screen text-gray-500  bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='py-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500'>Work</p>
              <p className='py-6'>Check out some of recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div style={{backgroundImage: `url(${MusicBand})`}} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
               
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Music band website
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://liam263.github.io/Music-band/" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                    </a>
                    <a href="https://github.com/Liam263/Music-band" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${WeatherApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      Weather App 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://liam263.github.io/Weather_App/" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                    </a>
                    <a href="https://github.com/Liam263/Weather_App" target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${Loading})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      React js Application 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${Loading})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      React js Application 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${Loading})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      React js Application 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${Loading})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
                {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                      React js Application 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Work