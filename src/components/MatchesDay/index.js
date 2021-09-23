import React, { useEffect, useState } from 'react';
import footballService from '../../services/footballService';
import Loading from '../Loading';
import { Table } from '../Table';
import { Th } from '../Th';
import { Td } from '../Td';
import { Thead } from '../Thead';
import { TBody } from '../Tbody';
import { Tr } from '../Tr';
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
    <Table>
      <Thead>
        <Tr>
          <Th title='#' />
          <Th title='Time Casa / Time Fora' />
          <Th title='Resultado' />
        </Tr>
      </Thead>
      <TBody>
        {tableMatches.matches?.map((match) => (
          <Tr key={match.id}>
            <Td>{match.id}</Td>
            <Td>
              {match.homeTeam.name}
              <span className='font-black px-2 '>VS</span>
              {match.awayTeam.name}
            </Td>
            <Td>
              {match.score.fullTime.homeTeam === null
                ? '0'
                : match.score.fullTime.homeTeam}
              {' : '}
              {match.score.fullTime.awayTeam === null
                ? '0'
                : match.score.fullTime.awayTeam}
              <span className='px-3'>
                -{match.status === 'FINISHED' ? ' Finalizado' : ' Em andamento'}
              </span>
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
