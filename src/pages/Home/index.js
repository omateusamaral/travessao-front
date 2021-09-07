import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import api from '../../services/axios';
import Loading from '../../components/Loading';

export function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await api.get('/news/recents');
      setNews(response.data);
    }
    loadNews();
  }, []);
  if (news.length) {
    return (
      <main className='mx-5'>
        <div className='flex flex-col mb-28'>
          <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
            Noticias Recentes
          </h1>
          <hr className='border-b-1 w-24 self-center border-black' />
        </div>
        <section className='md:masonry-2-col lg:masonry-3-col box-border  mx-auto before:box-inherit after:box-inherit'>
          {news.map((recents) => (
            <div
              className='break-inside my-6 bg-white rounded-xl shadow-xl hover:shadow-2xl pb-1'
              key={recents.id}
            >
              <p
                className='text-gray-500 w-full mb-3 text-center'
                dangerouslySetInnerHTML={{ __html: recents.resume }}
              />
              <h3 className='text-xl font-medium text-black p-3 text-center'>
                {recents.title}
              </h3>
            </div>
          ))}
        </section>
      </main>
    );
  } else {
    return <Loading />;
  }
}
