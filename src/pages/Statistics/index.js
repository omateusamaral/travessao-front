import React from 'react';
import { MatchesDay } from '../../components/MatchesDay';
import { Brasileirao } from '../../components/Brasileirao';

export function Statistics() {
  return (
    <main className='px-5   flex xl:flex-row lg:flex-col xs:flex-col md:flex-col justify-evenly '>
      <Brasileirao />
      <MatchesDay />
    </main>
  );
}
