import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#000' }} spin />
  );
  return (
    <div className='mx-5 '>
      <div className='flex flex-col mb-28'>
        <h1 className='text-4xl sm:text-4xl text-center lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-2 sm:mt-14 sm:mb-2'>
          Noticias Recentes
        </h1>
        <hr className='border-b-1 w-24 self-center border-black mb-5' />
        <Spin indicator={antIcon} />
      </div>
    </div>
  );
}
