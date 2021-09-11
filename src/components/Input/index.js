import React from 'react';

export function Input({ type, placeholder, changeValue, value }) {
  return (
    <span className='flex flex-row justify-center align-middle mb-3 '>
      <input
        className='shadow appearance-none border  rounded-tl-none rounded-bl-none rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changeValue}
      />
    </span>
  );
}
