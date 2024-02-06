import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className="max-w-[1800px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
                    </div>
                </div>

                <div className='max-w-[1800px] w-full grid sm:grid-cols-2 gap-8 pl-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p> Nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>I'm looking for an intership that provides me an unique experience and 
                            further develop my skills in a professional setting</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About