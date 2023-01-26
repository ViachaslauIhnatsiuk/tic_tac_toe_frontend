import { Dispatch, SetStateAction } from 'react';
import { IResult } from './../models/resultModel';

const winningCases: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const isWinnerExists = (
  board: string[],
  setResult: Dispatch<SetStateAction<IResult>>,
): void => {
  for (const winCase of winningCases) {
    if (
      board[winCase[0]] === board[winCase[1]] &&
      board[winCase[1]] === board[winCase[2]] &&
      board[winCase[0]] !== ''
    ) {
      setResult({ winner: board[winCase[0]], result: 'won' });
    }
  }
};

const isDraw = (board: string[], setResult: Dispatch<SetStateAction<IResult>>): void => {
  const nonEmptySells = board.filter((cell) => cell !== '');

  if (nonEmptySells.length === 9) {
    setResult({ winner: 'none', result: 'draw' });
  }
};

export { isWinnerExists, isDraw };
