import { useState, useContext } from 'react';
import { winningCases } from '../constants/winningCases';
import { Context } from '../context/context';

const useGame = () => {
  const [player, setPlayer] = useState<string>('X');
  const [turn, setTurn] = useState<string>('X');
  const { board, setBoard, setIsBoardBlocked, setResult } = useContext(Context);

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
      const winningCondition =
        board[winCase[0]] === board[winCase[1]] &&
        board[winCase[1]] === board[winCase[2]] &&
        board[winCase[0]] !== '';

      if (winningCondition) {
        setResult({ winner: board[winCase[0]], result: 'WINNER' });
        setIsBoardBlocked(true);
      }
    }
  };

  const isDraw = (): void => {
    const nonEmptySells = board.filter((cell) => cell !== '');

    if (nonEmptySells.length === 9) {
      setResult({ winner: '', result: 'DRAW' });
      setIsBoardBlocked(true);
    }
  };

  return {
    board,
    player,
    turn,
    getUpdatedBoard,
    isWinnerExists,
    isDraw,
    setBoard,
    setPlayer,
    setTurn,
  };
};

export { useGame };
