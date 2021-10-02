import React, { useState, useEffect } from 'react';
import youtubeApi from '../../services/youtubeApi';
import { YoutubeComponent } from '../../components/YoutubeComponent';
import { SliderComponent } from '../../components/SliderComponent';
export function Videos() {
  const [videos, setVideos] = useState([]);
  // const [advertisers, setAdvertisers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getVideos() {
      setLoading(true);
      const response = await youtubeApi.get(
        `/search?key=${process.env.REACT_APP_KEY_YOUTUBE_API}&channelId=UCw5-xj3AKqEizC7MvHaIPqA&order=date&maxResults=5`,
      );
      setVideos(response.data.items);
      setLoading(false);
    }
    getVideos();
  }, []);

  return (
    <div className='mt-10'>
      <SliderComponent />
      <div className='flex flex-col mb-28'>
        <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
          Conteúdo em vídeo
        </h1>
        <hr className='border-b-1 w-24 self-center border-black' />
      </div>
      <YoutubeComponent loading={loading} videos={videos} title='ESPN' />
    </div>
  );
}
