import { FC, useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import { Context } from '../../context/context';
import { RoomModal } from '../roomModal/RoomModal';
import { Board } from '../board/Board';
import { Replay } from '../buttons/Replay';

const MainPage: FC = () => {
  const { user, result } = useContext(Context);

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
      <Board />
      <Replay />
    </Stack>
  );
};

export { MainPage };
