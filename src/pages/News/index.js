import React,{useState,useEffect} from 'react';
import {Pagination} from '../../components/Pagination';
import {News} from '../../components/News';
import api from '../../services/axios';
export function AllNews() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(15);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAllNews() {
      setLoading(true);
      const response = await api.get('/news');
      setNews(response.data);
      setLoading(false);
    }
    loadAllNews();
  }, []);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews  = news.slice(indexOfFirstNews, indexOfLastNews);

  function paginate(pageNumber){
    setCurrentPage(pageNumber);
  }

  return (
    <main className='mx-5'>
      <div className='flex flex-col mb-28'>
        <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
          Notícias
        </h1>
        <hr className='border-b-1 w-24 self-center border-black' />
      </div>

      <News news={currentNews} loading={loading} />
      <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate}/>
    </main>
  );
}
