import React, { useEffect, useState } from 'react';
import footballService from '../../services/footballService';
import Loading from '../Loading';
import { Table } from '../Table';
import { Th } from '../Th';
import { Td } from '../Td';
import { Thead } from '../Thead';
import { Tr } from '../Tr';
import { TBody } from '../Tbody';

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
    <Table>
      <Thead>
        <Tr>
          <Th title='Clubes' />
          <Th title='PTs' />
          <Th title='PJ' />
          <Th title='VIT' />
          <Th title='ET' />
          <Th title='DER' />
          <Th title='GP' />
          <Th title='GC' />
          <Th title='SG' />
        </Tr>
      </Thead>
      <TBody>
        {tableMatches.table?.map((match, index) => (
          <Tr key={index}>
            <Td>
              <span> {match.position}</span>
              <img src={match.team.crestUrl} className='px-2 w-5/12' />
              <span className='p-3'>{match.team.name}</span>
            </Td>

            <Td>{match.points}</Td>

            <Td>{match.playedGames}</Td>
            <Td>{match.won}</Td>
            <Td>{match.draw}</Td>
            <Td>{match.lost}</Td>

            <Td>{match.goalsFor}</Td>
            <Td>{match.goalsAgainst}</Td>
            <Td>{match.goalDifference}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}
