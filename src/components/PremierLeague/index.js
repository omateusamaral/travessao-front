/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import footballService from '../../services/footballService';
import Loading from '../Loading';
import { Table } from '../Table';
import { Th } from '../Th';
import { Td } from '../Td';
import { Thead } from '../Thead';
import { Tr } from '../Tr';
import { TBody } from '../Tbody';

export function PremierLeague() {
  const [tableMatches, setTableMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadMatches() {
      setLoading(true);
      const response = await footballService.get('/competitions/PL/matches');
      setTableMatches(response.data);
      console.log(response.data);
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
                -
                {match.status === 'FINISHED'
                  ? ' Finalizado'
                  : match.status === 'SCHEDULED'
                  ? `Agendado`
                  : 'Em andamento'}
              </span>
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
