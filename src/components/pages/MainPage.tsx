import { FC, MouseEvent, useContext, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Context } from '../../context/context';
import { BoardCell } from '../boardCell/BoardCell';
import { RoomModal } from '../roomModal/RoomModal';
import { Socket } from 'socket.io-client';
import { cells } from '../../constants/cells';

const MainPage: FC<{ socket: Socket }> = ({ socket }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [canPlay, setCanPlay] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const { room } = useContext(Context);

  useEffect(() => {
    socket.on('updateGame', (id) => {
      const updatedBoard = board.map((cell, index) => {
        if (index === Number(id)) {
          return (cell = currentPlayer === 'O' ? 'X' : 'O');
        }
        return cell;
      });
      setBoard(updatedBoard);

      setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
      setCanPlay(true);
    });

    return () => {
      socket.off('updateGame');
    };
  });

  const handleClick = (event: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
    const id = (event.currentTarget as HTMLElement).id;
    if (canPlay && board[Number(id)] === '') {
      const updatedBoard = board.map((cell, index) => {
        if (index === Number(id)) {
          return (cell = currentPlayer === 'O' ? 'X' : 'O');
        }
        return cell;
      });
      setBoard(updatedBoard);
      setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');

      socket.emit('play', { id, room });
      setCanPlay(false);
    }

    if (
      (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') ||
      (board[0] == 'O' && board[1] == 'O' && board[2] == 'O')
    ) {
      setBoard(['', '', '', '', '', '', '', '', '']);
    }
  };

  return (
    <>
      <RoomModal />
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
        }}
      >
        {cells.map((cell, index) => (
          <BoardCell
            key={index}
            handleClick={handleClick}
            id={cell}
            value={board[index]}
          />
        ))}
      </Stack>
    </>
  );
};

export { MainPage };
