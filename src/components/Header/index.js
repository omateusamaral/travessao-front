import React, { useMemo, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoNewspaperOutline, IoSearchOutline } from 'react-icons/io5';
import { FaPowerOff } from 'react-icons/fa';
import { AiOutlineSchedule, AiOutlineYoutube } from 'react-icons/ai';

import * as actions from '../../store/models/user/auth/actions';
import * as actionsNews from '../../store/models/news/find/actions';
import { history } from '../../services/history';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [typedNews, setTypedNews] = useState('');
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }
  const newsTyped = useMemo(() => typedNews, [typedNews]);
  function handleClick() {
    dispatch(actionsNews.findRequest({ newsTyped }));
  }
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      dispatch(actionsNews.findRequest({ newsTyped }));
    }
  }
  return (
    <header role='banner' className='px-0  container mx-auto pt-6 mb-6'>
      <div className='flex-row flex lg:justify-evenly sm:justify-center md:justify-center  xl:justify-evenly xs:justify-center'>
        <Link className='flex flex-row ' to='/'>
          <AiOutlineHome color='#000' size={30} />
        </Link>

        <div className='flex flex-row'>
          <li className='dropdown inline px-4 cursor-pointer font-bold text-base uppercase tracking-wide relative z-10'>
            <AiOutlineSchedule color='#000' size={30} />
            <div className='dropdown-menu  absolute hidden h-auto pt-4 '>
              <ul className='block w-full bg-white shadow h-auto px-6'>
                <li className='py-1'>
                  <Link
                    to='/statistics/brasileirao'
                    className='block font-bold text-base uppercase hover:text-black cursor-pointer'
                  >
                    Tabela Brasileirão
                  </Link>
                </li>
                <li className='py-1'>
                  <Link
                    to='/statistics/games'
                    className='block font-bold text-base uppercase hover:text-black cursor-pointer'
                  >
                    últimos jogos Brasileirão
                  </Link>
                </li>
                <li className='py-1'>
                  <Link
                    to='/statistics/cl'
                    className='block font-bold text-base uppercase hover:text-black cursor-pointer'
                  >
                    Liga dos campeões
                  </Link>
                </li>
                <li className='py-1'>
                  <Link
                    to='/statistics/pl'
                    className='block font-bold text-base uppercase hover:text-black cursor-pointer'
                  >
                    Premiere League
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </div>

        <div>
          <span className='border-b-2 border-gray-400 lg:flex xl:flex 2xl:flex xs:hidden sm:hidden md:hidden'>
            <input
              className='bg-transparent text-gray-700 leading-tight focus:outline-none  h-10 px-0'
              type='text'
              placeholder='Digite uma notícia aqui'
              onChange={(e) => setTypedNews(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <IoSearchOutline
              color='rgba(156, 163, 175, 1)'
              size={30}
              className='cursor-pointer'
              onClick={handleClick}
            />
          </span>
        </div>

        <Link className='flex flex-row ' to='/news'>
          <IoNewspaperOutline color='#000' size={30} />
        </Link>

        <Link className='flex flex-row ' to='/videos'>
          <AiOutlineYoutube color='#000' size={30} />
        </Link>
        <div className='flex flex-row'>
          {isLoggedIn ? (
            <>
              <Link to='/'>
                <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded ml-2'>
                  Minha Conta
                </button>
              </Link>

              <Link to='/logout' onClick={handleLogout}>
                <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded ml-2 flex'>
                  <FaPowerOff size={16} className='mr-2 mt-1' /> Sair
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mr-3'>
                  Login
                </button>
              </Link>

              <Link to='/register'>
                <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
                  Registrar
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
