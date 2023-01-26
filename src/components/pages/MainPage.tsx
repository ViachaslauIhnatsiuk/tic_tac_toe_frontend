import { FC, useContext, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Context } from '../../context/context';
import { BoardCell } from '../boardCell/BoardCell';
import { RoomModal } from '../roomModal/RoomModal';

const MainPage: FC = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [canPlay, setCanPlay] = useState(true);
  const { socket, room } = useContext(Context);

  const cells = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  useEffect(() => {
    socket?.on('updateGame', (id) => {
      setBoard((data) => ({ ...data, [id]: 'O' }));
      setCanPlay(true);
    });

    return () => {
      socket?.off('updateGame');
    };
  });

  const handleClick = (event: Event) => {
    const id = (event.currentTarget as HTMLElement).id;
    if (canPlay && board[Number(id)] === '') {
      setBoard((data) => ({ ...data, [id]: 'X' }));
      socket?.emit('play', { id, room });
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
