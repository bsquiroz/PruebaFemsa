/* eslint-disable prettier/prettier */

import {useEffect, useState} from 'react';
import {PropsMoves} from '../interfaces';

export const useMove = () => {
  const [moves, setMoves] = useState<PropsMoves[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [moveFilter, setMoveFilter] = useState<PropsMoves[]>([]);

  const handleFilters = (filter: string) => {
    if (filter === 'canjeados') {
      const dataFilter = moves.filter(move => !move.is_redemption);
      setMoveFilter(dataFilter);
      return;
    }

    if (filter === 'ganados') {
      const dataFilter = moves.filter(move => move.is_redemption);
      setMoveFilter(dataFilter);
      return;
    }

    if (filter === 'todos') {
      const dataFilter = moves.filter(move => move);
      setMoveFilter(dataFilter);
      return;
    }
  };

  const getMoves = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
      );

      const res = await data.json();

      setMoves(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMoves();
  }, []);

  return {moves, isLoading, moveFilter, handleFilters};
};
