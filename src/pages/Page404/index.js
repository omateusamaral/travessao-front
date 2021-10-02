import React from 'react';
import { Link } from 'react-router-dom';
export function Page404() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <header className='mt-5'>
        <h1 className='text-9xl font-bold'>404</h1>
      </header>

      <footer className='mt-8 flex flex-col justify-center items-center'>
        <p className='text-4xl font-bold mt-2'>
          <p>Está página não existe 😟😟</p>
        </p>
      </footer>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mr-3'>
          Voltar
        </button>
      </Link>
    </main>
  );
}
