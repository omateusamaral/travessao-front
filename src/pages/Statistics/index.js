import React from 'react';
import { MatchesDay } from '../../components/MatchesDay';
import { Brasileirao } from '../../components/Brasileirao';
import { useParams } from 'react-router';

export function Statistics() {
  const { table } = useParams();
  return (
    <main className='flex xl:flex-row lg:flex-col xs:flex-col md:flex-col justify-center'>
      {table === 'brasileirao' ? <Brasileirao /> : <MatchesDay />}
    </main>
  );
}
