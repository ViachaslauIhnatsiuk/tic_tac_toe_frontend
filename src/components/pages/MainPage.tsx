import { FC, useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import { Context } from '../../context/context';
import { RoomModal } from '../roomModal/RoomModal';
import { Board } from '../board/Board';
import { Replay } from '../buttons/Replay';
import { initialResultState } from '../../constants/board';

const MainPage: FC = () => {
  const { user, room, result } = useContext(Context);

  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h4" sx={{ color: '#adadad', textAlign: 'center' }}>
        Player: <span style={{ color: '#ffb048' }}>{user}</span>
      </Typography>
      <Typography variant="h5" sx={{ color: '#adadad', textAlign: 'center' }}>
        {room && 'Room: '}
        {room && <span style={{ color: '#ffb048' }}>{room}</span>}
      </Typography>
      <Typography variant="h6" sx={{ color: '#adadad', textAlign: 'center', mb: 3 }}>
        {result.result !== initialResultState.result &&
          `Result: ${result.result} ${result.winner}`}
      </Typography>
      <RoomModal />
      <Board />
      <Replay />
    </Stack>
  );
};

export { MainPage };
