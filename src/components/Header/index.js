import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoNewspaperOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header role='banner' className='px-0 container mx-auto pt-6 mb-6'>
      <div className='flex-row flex justify-around'>
        <img
          src='https://img1.gratispng.com/20171221/shw/football-player-silhouette-png-transparent-clip-art-image-5a3c4af158d6d5.4261270915139007853639.jpg'
          alt='icon'
          className='h-20 w-20 justify-start xs:hidden lg:block'
        />

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
        <Link className='flex flex-row ' to='/'>
          <IoNewspaperOutline color='#000' size={30} />
        </Link>
        <div className='flex flex-row'>
          <Link to='/login'>
            <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mr-3'>
              Login
            </button>
          </Link>

          <Link to='/'>
            <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
              Registrar
            </button>
          </Link>

          {/* <Link to='/'>
            <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded ml-2'>
              Minha Conta
            </button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
