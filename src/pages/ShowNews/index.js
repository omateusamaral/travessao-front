import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../services/axios';
import moment from 'moment';
import { AiOutlineSend } from 'react-icons/ai';
export function ShowNews() {
  const { newsId } = useParams();
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({});
  useEffect(() => {
    async function getNews() {
      setLoading(true);
      const response = await api.get(`news/find/${newsId}`);
      console.log(response.data);
      setNews(response.data);
      setLoading(false);
    }
    getNews();
  }, [newsId]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className='mt-10 pb-5'>
      <main className='mx-5'>
        <div className='flex flex-col mb-28'>
          <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
            {news.title}
          </h1>
          <hr className='border-b-1 w-24 self-center border-black' />
        </div>

        <div className='p-4 mx-5'>
          <p dangerouslySetInnerHTML={{ __html: news.resume }}></p>
        </div>

        <h6 className='text-4x text-gray-500 mb-0'>
          Postado no dia: {moment(news.created_at).format('DD/MM/YYYY')} Às{' '}
          {moment(news.created_at).format('HH:MM')}
        </h6>
        <hr className='border-b-1 w-32 self-center border-gray-500' />

        <section>
          <div className='flex flex-col mb-5'>
            <h5 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 sm:mt-14 sm:mb-2'>
              Comentários
            </h5>
            <hr className='border-b-1 w-24 self-center border-black' />
          </div>
          <form className='flex justify-center'>
            <textarea
              className='resize-none border border-gray-500 rounded-md w-7/12 h-16 p-3'
              Placeholder='Digite Aqui o que você achou da notícia.'
            ></textarea>

            <button
              type='submit'
              className='ml-2 bg-transparent text-black font-semibold  h-16 mt-0 px-3 border border-black hover:text-white hover:bg-black rounded'
            >
              <AiOutlineSend size={18} />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
