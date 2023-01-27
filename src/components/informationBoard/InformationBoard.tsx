import { FC, useContext } from 'react';
import { Stack, Typography } from '@mui/material';
import { Context } from '../../context/context';
import circle from '../../assets/circle.svg';
import cross from '../../assets/cross.svg';

const InformationBoard: FC = () => {
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
      <Typography
        variant="h6"
        sx={{ color: '#adadad', textAlign: 'center', mb: 3, display: 'flex', gap: 2 }}
      >
        {result.result === 'DRAW' && 'DRAW'}
        {result.result === 'WINNER' && 'Winner: '}
        {result.winner === 'X' && (
          <img src={cross} alt="cross" style={{ width: '20px' }} />
        )}
        {result.winner === 'O' && (
          <img src={circle} alt="circle" style={{ width: '20px' }} />
        )}
      </Typography>
    </Stack>
  );
};

export { InformationBoard };
