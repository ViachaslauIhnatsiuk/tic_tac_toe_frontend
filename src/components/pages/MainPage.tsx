import { FC, MouseEvent, useContext, useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { Context } from '../../context/context';
import { BoardCell } from '../boardCell/BoardCell';
import { RoomModal } from '../roomModal/RoomModal';
import { boardCells, initialBoardState } from '../../constants/board';
import { boardStyles } from '../../constants/elementStyles';
import { getUpdatedBoard } from '../../helpers/getUpdatedBoard';
import { isDraw, isWinnerExists } from '../../helpers/getGameResult';
import { MainPageProps } from '../../models/mainPageProps';
import { IResult } from '../../models/resultModel';

const MainPage: FC<MainPageProps> = ({ socket }) => {
  const [result, setResult] = useState<IResult>({ winner: 'none', result: 'none' });
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [player, setPlayer] = useState<string>('X');
  const [turn, setTurn] = useState<string>('X');
  const { user, room, isBoardBlocked, setIsBoardBlocked } = useContext(Context);

  useEffect(() => {
    socket.on('updateGame', (id) => {
      const updatedBoard = getUpdatedBoard(board, player, id);

      setBoard(updatedBoard);
      setPlayer(player === 'O' ? 'X' : 'O');
      setTurn(player === 'O' ? 'X' : 'O');
    });

    return () => {
      socket.off('updateGame');
    };
  });

  useEffect(() => {
    isDraw(board, setResult, setIsBoardBlocked);
    isWinnerExists(board, setResult, setIsBoardBlocked);
  }, [board]);

  const handleClick = (event: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
    const { id } = event.currentTarget as HTMLElement;

    if (player === turn && board[Number(id)] === '') {
      const updatedBoard = getUpdatedBoard(board, player, id);

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
