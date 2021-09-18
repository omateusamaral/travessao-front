import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import api from '../../services/axios';
import { News } from '../../components/News';

export function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      const response = await api.get('/news/recents');
      setNews(response.data);
      setLoading(false);
    }
    loadNews();
  }, []);
  return (
    <main className='mx-5'>
      <div className='flex flex-col mb-28'>
        <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
          Notícias Recentes
        </h1>
        <hr className='border-b-1 w-24 self-center border-black' />
      </div>

      <News news={news} loading={loading} />
    </main>
  );
}
