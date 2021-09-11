import React, { useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { MdEmail, MdVpnKey } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/models/auth/actions';
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      toast.error('Email inválido');
    }
    dispatch(actions.loginRequest({ email, password }));
  }
  return (
    <main className='flex justify-center align-middle mt-20'>
      <div className=' shadow-md py-10  w-3/4 '>
        <h1 className='text-black leading-normal text-lg font-semibold text-center'>
          Bem Vindo(a)
        </h1>

        <form onSubmit={handleSubmit} className='w-full'>
          <span className='flex flex-row justify-center align-middle mb-3 '>
            <MdEmail
              color='#000'
              size={35}
              className=' border border-r-0 py-2 shadow appearance-none'
            />
            <input
              className='shadow appearance-none border  rounded-tl-none rounded-bl-none rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span className='flex flex-row justify-center align-middle'>
            <MdVpnKey
              color='#000'
              size={35}
              className=' border border-r-0 py-2 shadow appearance-none'
            />
            <input
              className='shadow appearance-none border  rounded-tl-none rounded-bl-none rounded w-2/4  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <span className='flex flex-row justify-center'>
            <button
              type='submit'
              className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-3 border border-black hover:border-transparent rounded w-2/4  mt-3'
            >
              Entrar
            </button>
          </span>

          <div className='flex justify-center w-3/5 mt-2'>
            <Link to='/register'>
              <h5 className='text-blue-500'>Não tem uma conta?</h5>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
