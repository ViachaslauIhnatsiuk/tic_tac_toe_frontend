import { FC, useContext, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Context } from '../../context/context';
import { BoardCell } from '../boardCell/BoardCell';

const MainPage: FC = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const { socket, room } = useContext(Context);

  const cells = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  return (
    <Stack
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
      }}
    >
      {cells.map((cell, index) => (
        <BoardCell key={index} id={cell} value={board[index]} />
      ))}
    </Stack>
  );
};

export { MainPage };
