import React from 'react';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function News({ news, loading }) {
  const foundNews = useSelector((state) => state.news.newsTyped);

  if (!Array.isArray(foundNews)) {
    news = Object.values(foundNews);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <section className='md:masonry-2-col lg:masonry-3-col box-border  mx-auto before:box-inherit after:box-inherit'>
      {news.map((recents) => (
        <div
          className='break-inside my-6  bg-white rounded-xl shadow-xl hover:shadow-2xl pb-1'
          key={recents.id}
        >
          <p
            className='text-gray-500 w-full h-full mb-3 text-center no-underline'
            dangerouslySetInnerHTML={{ __html: recents.resume }}
          />
          <Link
            to={`/${recents.id}/${recents.title_url}`}
            className='flex justify-center'
          >
            <button
              type='button'
              className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded  w-11/12 '
            >
              Visualizar
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
}
