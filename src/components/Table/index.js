import React from 'react';

export function Table({ children }) {
  return (
    <table className='shadow-lg w-1/6 h-1/6 mb-3 table-auto'>{children}</table>
  );
}
