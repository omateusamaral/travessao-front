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
        <Spin indicator={antIcon} />
      </div>
    </div>
  );
}
