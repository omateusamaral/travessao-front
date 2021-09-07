import React, { useState } from 'react';
import validator from 'validator';
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
      <div className='rounded-xl shadow-2xl py-10 px-72'>
        <h1 className='text-black leading-normal text-lg font-semibold text-center'>
          Bem Vindo(a)
        </h1>

        <form onSubmit={handleSubmit}>
          <span className='flex flex-row justify-center align-middle mb-3'>
            <MdEmail
              color='#000'
              size={35}
              className=' border border-r-0 py-2 shadow appearance-none'
            />
            <input
              className='shadow appearance-none border  rounded-tl-none rounded-bl-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
              className='shadow appearance-none border  rounded-tl-none rounded-bl-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <button
            type='submit'
            className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded  w-full mt-3'
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
