import React from 'react';

export  function Pagination({newsPerPage,totalNews, paginate}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {

    pageNumbers.push(i);
  }
  return (
    <div className='flex flex-row justify-end p-5'>
      <nav className=' z-0  rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
        {pageNumbers.map((number) => (
          <a href='#' key={number} className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium' onClick={()=>paginate(number)}>
            {
              number
            }
          </a>
        ))}
    
    
      </nav>
    </div>
  );
}