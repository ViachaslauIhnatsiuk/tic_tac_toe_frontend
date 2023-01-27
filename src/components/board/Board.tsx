import { FC, MouseEvent, useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import { BoardCell } from './BoardCell';
import { Stack } from '@mui/material';
import { boardCells } from '../../constants/board';
import { useGame } from '../../hooks/useGame';

const Board: FC = () => {
  const { socket, room, isBoardBlocked } = useContext(Context);
  const {
    board,
    player,
    turn,
    getUpdatedBoard,
    setBoard,
    setPlayer,
    setTurn,
    isDraw,
    isWinnerExists,
  } = useGame();

  useEffect(() => {
    socket?.on('updateGame', (id) => {
      const updatedBoard = getUpdatedBoard(id);

      setBoard(updatedBoard);
      setPlayer(player === 'O' ? 'X' : 'O');
      setTurn(player === 'O' ? 'X' : 'O');
    });

    return () => {
      socket?.off('updateGame');
    };
  });

  useEffect(() => {
    isDraw();
    isWinnerExists();
  }, [board]);

  const handleClick = (event: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
    const { id } = event.currentTarget as HTMLElement;

    if (player === turn && board[Number(id)] === '') {
      const updatedBoard = getUpdatedBoard(id);

      setBoard(updatedBoard);
      setPlayer(player === 'O' ? 'X' : 'O');

      socket?.emit('play', { id, room });
    }
  };

  return (
    <Stack
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        mb: 2,
        pointerEvents: isBoardBlocked ? 'none' : 'auto',
        backgroundColor: isBoardBlocked ? '#12161f' : 'transparent',
      }}
    >
      {boardCells.map((cell, index) => (
        <BoardCell key={index} handleClick={handleClick} id={cell} value={board[index]} />
      ))}
    </Stack>
  );
};

export { Board };
