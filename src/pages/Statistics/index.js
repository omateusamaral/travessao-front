import React from 'react';
import { MatchesDay } from '../../components/MatchesDay';
import { Brasileirao } from '../../components/Brasileirao';
import { useParams } from 'react-router';
import { ChampionsLeague } from '../../components/ChampionsLeague';
import { PremierLeague } from '../../components/PremierLeague';

export function Statistics() {
  const { table } = useParams();
  return (
    <main className='flex flex-row justify-center mt-10'>
      {table === 'brasileirao' ? (
        <Brasileirao />
      ) : table === 'cl' ? (
        <ChampionsLeague />
      ) : table === 'pl' ? (
        <PremierLeague />
      ) : (
        <MatchesDay />
      )}
    </main>
  );
}
