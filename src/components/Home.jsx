import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [currentProfession, setCurrentProfession] = useState('I\'m a Front-End Developer.');
  const professions = ['I\'m an English Writer/Translator.', 'I Also Edit Videos.', 'And Write Codes!'];
  const typingSpeed = 100; // Adjust for desired typing speed (milliseconds)
  const pauseDuration = 1500; // Adjust pause duration between professions (milliseconds)

  useEffect(() => {
    const typeWriter = async () => {
      while (true) { // Loop to repeat the effect indefinitely
        for (let i = 0; i < professions.length; i++) {
          const profession = professions[i];
          let typedText = '';

          for (let char of profession) {
            typedText += char;
            await new Promise((resolve) => setTimeout(resolve, typingSpeed));
            setCurrentProfession(typedText);
          }

          // Add a pause between professions
          await new Promise((resolve) => setTimeout(resolve, pauseDuration));
        }
      }
    };

    typeWriter(); // Call the function to start the effect
  }, []);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tanakorn</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>{currentProfession}</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I leverage my diverse skillset to create engaging and impactful digital experiences, whether it's crafting responsive web applications, writing compelling English content, or editing visually stunning videos.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Scroll Down to Know Me<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>
        </div>
      </div>
    </div>
  );
};

export default Home;

