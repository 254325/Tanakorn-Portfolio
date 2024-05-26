import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
                <div> </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div>                    
                        <p className='sm:text-right text-4xl font-bold pb-8'>Nice to Meet You. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            My name is Tanakorn Panyadee. I am a 25-year-old Thai citizen with a Bachelor's degree in English language. I use my diverse skillset (mostly self-taught) to create impactful digital experiences for my clients over the course of two years. 
                        </p>
                </div>           
            </div>
        </div>
    </div>
  )
}

export default About