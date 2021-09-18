import React, { useEffect, useState } from 'react';
import footballService from '../../services/footballService';
import Loading from '../Loading';

export function MatchesDay() {
  const [tableMatches, setTableMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadMatches() {
      setLoading(true);
      const response = await footballService.get('/matches');
      setTableMatches(response.data);
      setLoading(false);
    }

    loadMatches();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <table className='shadow-lg w-11/12 h-1/6 mb-3 table-auto'>
        <thead>
          <tr>
            <th className='bg-gray-100 border text-left px-8 py-4'>#</th>
            <th className='bg-gray-100 border text-left px-8 py-4'>
              Time Casa / Time Fora
            </th>

            <th className='bg-gray-100 border text-left px-8 py-4'>
              Resultado
            </th>
          </tr>
        </thead>
        <tbody>
          {tableMatches.matches?.map((match) => (
            <tr key={match.id}>
              <th className=' px-8 py-4'>{match.id}</th>
              <td className=' px-8 py-4'>
                {match.homeTeam.name}
                <span className='font-black px-2 '>VS</span>
                {match.homeTeam.name}
              </td>
              <td className=' px-8 py-4'>
                {match.score.fullTime.homeTeam === null
                  ? '0'
                  : match.score.fullTime.homeTeam}
                {' : '}
                {match.score.fullTime.awayTeam === null
                  ? '0'
                  : match.score.fullTime.awayTeam}
                <span className='px-3'>
                  -
                  {match.status === 'FINISHED'
                    ? ' Finalizado'
                    : ' Em andamento'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
