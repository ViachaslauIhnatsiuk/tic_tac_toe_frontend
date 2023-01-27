import { FC, MouseEvent, useContext, useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { Context } from '../../context/context';
import { BoardCell } from '../boardCell/BoardCell';
import { RoomModal } from '../roomModal/RoomModal';
import { boardCells } from '../../constants/board';
import { boardStyles } from '../../constants/elementStyles';
import { MainPageProps } from '../../models/mainPageProps';
import { useGame } from '../../hooks/useGame';

const MainPage: FC<MainPageProps> = ({ socket }) => {
  const [turn, setTurn] = useState<string>('X');
  const { user, room, isBoardBlocked } = useContext(Context);
  const {
    board,
    player,
    result,
    getUpdatedBoard,
    isWinnerExists,
    isDraw,
    setBoard,
    setPlayer,
  } = useGame();

  useEffect(() => {
    socket.on('updateGame', (id) => {
      const updatedBoard = getUpdatedBoard(id);

      setBoard(updatedBoard);
      setPlayer(player === 'O' ? 'X' : 'O');
      setTurn(player === 'O' ? 'X' : 'O');
    });

    return () => {
      socket.off('updateGame');
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

      socket.emit('play', { id, room });
    }
  };

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Typography variant="h6" sx={{ color: '#2475c5', textAlign: 'center' }}>
        Result: {result.result}
      </Typography>
      <Typography variant="h6" sx={{ color: '#2475c5', textAlign: 'center' }}>
        Winner: {result.winner}
      </Typography>
      <Typography variant="h4" sx={{ color: '#2475c5', textAlign: 'center' }}>
        {user}
      </Typography>
      <RoomModal />
      <Stack
        sx={{
          ...boardStyles,
          pointerEvents: isBoardBlocked ? 'none' : 'auto',
          backgroundColor: isBoardBlocked ? '#12161f' : 'transparent',
        }}
      >
        {boardCells.map((cell, index) => (
          <BoardCell
            key={index}
            handleClick={handleClick}
            id={cell}
            value={board[index]}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export { MainPage };
