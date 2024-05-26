import React from 'react';

const Work = () => {
  const youtubeVideoIds = ['xMV6l2y67rk']; // Replace with your YouTube video IDs

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        <div className='flex-cols justify-center items-center'>
          {youtubeVideoIds.map((videoId) => (
            <div key={videoId} className='w-1/2 md:w-1/3 p-2'>
              <iframe
                width='700'
                height='500'
                src={`https://www.youtube.com/embed/${videoId}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Embedded youtube video'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
