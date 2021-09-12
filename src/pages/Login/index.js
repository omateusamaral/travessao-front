import React, { useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/models/user/auth/actions';
import { Input } from '../../components/Input';
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    if (!validator.isEmail(email)) {
      toast.error('Email inválido');
    }
    dispatch(actions.loginRequest({ email, password }));
  }
  return (
    <main className='flex justify-center mt-20'>
      <div className=' shadow-md py-10  w-3/4 '>
        <h1 className='text-black leading-normal text-lg font-semibold text-center'>
          Bem Vindo(a)
        </h1>

        <form onSubmit={handleSubmit} className='w-full'>
          <Input
            type='email'
            placeholder='Seu E-mail'
            value={email}
            changeValue={(e) => setEmail(e.target.value)}
          />

          <Input
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
