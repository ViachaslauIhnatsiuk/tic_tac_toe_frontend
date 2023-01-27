import { FC } from 'react';
import { Stack } from '@mui/material';
import { RoomModal } from '../roomModal/RoomModal';
import { Board } from '../board/Board';
import { Replay } from '../buttons/Replay';
import { InformationBoard } from '../informationBoard/InformationBoard';

const MainPage: FC = () => {
  return (
    <Stack direction="column" alignItems="center">
      <InformationBoard />
      <RoomModal />
      <Board />
      <Replay />
    </Stack>
  );
};

export { MainPage };
