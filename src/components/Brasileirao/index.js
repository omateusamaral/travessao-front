import React, { useEffect, useState } from 'react';
import footballService from '../../services/footballService';
import Loading from '../Loading';

export function Brasileirao() {
  const [tableMatches, setTableMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadMatches() {
      setLoading(true);
      const response = await footballService.get(
        '/competitions/BSA/standings?standingType=TOTAL',
      );
      setTableMatches(response.data.standings[0]);

      setLoading(false);
    }

    loadMatches();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <table className='shadow-lg w-1/6 h-1/6 mb-3 table-auto'>
        <thead>
          <tr>
            <th className='bg-gray-100 border text-left px-4 py-4'>Clubes</th>

            <th className='bg-gray-100 border text-left px-4 py-4'>PTs</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>PJ</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>VIT</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>E</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>DER</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>GP</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>GC</th>
            <th className='bg-gray-100 border text-left px-4 py-4'>SG</th>
          </tr>
        </thead>
        <tbody>
          {tableMatches.table?.map((match, index) => (
            <tr key={index}>
              <td className=' px-4 mt-1 flex flex-row'>
                <span> {match.position}</span>
                <img src={match.team.crestUrl} className='px-2 w-5/12' />
                <span className='p-3'>{match.team.name}</span>
              </td>

              <td className=' px-4'>{match.points}</td>

              <td className=' px-4'>{match.playedGames}</td>
              <td className=' px-4'>{match.won}</td>
              <td className=' px-4'>{match.draw}</td>
              <td className=' px-4'>{match.lost}</td>

              <td className=' px-4'>{match.goalsFor}</td>
              <td className=' px-4'>{match.goalsAgainst}</td>
              <td className=' px-4'>{match.goalDifference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
