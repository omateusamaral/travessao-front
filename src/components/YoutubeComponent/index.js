import React from 'react';
import Loading from '../Loading';

export function YoutubeComponent({ videos, title, loading }) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className='mx-5'>
      <h1 className='text-4xl sm:text-4xl text-left lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
        {title}
      </h1>
      <hr className='border-b-1 w-60 self-center border-black' />
      <section
        className='xs:mansory-1-col sm:mansory-1-col md:masonry-2-col lg:masonry-3-col xl:mansory-3-col
2xl:mansory-3-col  lg:gap-0'
      >
        {videos.map((videos, index) => (
          <div key={index} className='break-inside my-6'>
            <iframe
              className='w-full object-cover'
              height='444'
              src={`https://www.youtube.com/embed/${videos.id.videoId}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </section>
    </div>
  );
}
