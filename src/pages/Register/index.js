import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/models/user/register/actions';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
export function Register() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(actions.registerRequest({ username, email, password }));
  }
  return (
    <main className='flex justify-center mt-20'>
      <div className=' shadow-md py-10  w-3/4 '>
        <h1 className='text-black leading-normal text-lg font-semibold text-center'>
          Bem Vindo(a)
        </h1>

        <form className='w-full' onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Seu Nome'
            value={username}
            changeValue={(e) => setUserName(e.target.value)}
          />

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
            changeValue={(e) => setPassword(e.target.value)}
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
            <Link to='/login'>
              <h5 className='text-blue-500'>Já tem uma conta?</h5>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
