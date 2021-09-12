import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoNewspaperOutline, IoSearchOutline } from 'react-icons/io5';
import { FaPowerOff } from 'react-icons/fa';
import * as actions from '../../store/models/user/auth/actions';
import { history } from '../../services/history';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  }
  return (
    <header role='banner' className='px-0 container mx-auto pt-6 mb-6'>
      <div className='flex-row flex justify-around'>
        <Link className='flex flex-row ' to='/'>
          <AiOutlineHome color='#000' size={30} />
        </Link>
        <div>
          <span className='border-b-2 border-gray-400 lg:flex xl:flex 2xl:flex xs:hidden sm:hidden md:hidden'>
            <input
              className='bg-transparent text-gray-700 leading-tight focus:outline-none  h-10 px-0'
              type='text'
              placeholder='Digite uma notícia aqui'
            />
            <IoSearchOutline
              color='rgba(156, 163, 175, 1)'
              size={30}
              className='cursor-pointer'
            />
          </span>
        </div>
        <Link className='flex flex-row ' to='/news'>
          <IoNewspaperOutline color='#000' size={30} />
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
