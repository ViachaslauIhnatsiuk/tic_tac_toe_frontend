import { useState, useContext } from 'react';
import { initialBoardState } from '../constants/board';
import { winningCases } from '../constants/winningCases';
import { Context } from '../context/context';
import { IResult } from '../models/resultModel';

const useGame = () => {
  const [result, setResult] = useState<IResult>({ winner: 'none', result: 'none' });
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [player, setPlayer] = useState<string>('X');
  const { setIsBoardBlocked } = useContext(Context);

  const getUpdatedBoard = (id: number | string): string[] => {
    return board.map((cell, index) => {
      if (index === Number(id)) {
        return (cell = player === 'O' ? 'X' : 'O');
      }
      return cell;
    });
  };

  const isWinnerExists = (): void => {
    for (const winCase of winningCases) {
      if (
        board[winCase[0]] === board[winCase[1]] &&
        board[winCase[1]] === board[winCase[2]] &&
        board[winCase[0]] !== ''
      ) {
        setResult({ winner: board[winCase[0]], result: 'won' });
        setIsBoardBlocked(true);
      }
    }
  };

  const isDraw = (): void => {
    const nonEmptySells = board.filter((cell) => cell !== '');

    if (nonEmptySells.length === 9) {
      setResult({ winner: 'none', result: 'draw' });
      setIsBoardBlocked(true);
    }
  };

  return {
    board,
    player,
    result,
    getUpdatedBoard,
    isWinnerExists,
    isDraw,
    setBoard,
    setPlayer,
  };
};

export { useGame };
