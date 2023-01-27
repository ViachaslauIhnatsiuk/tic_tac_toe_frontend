import { FC, useContext } from 'react';
import { Button } from '@mui/material';
import { Context } from '../../context/context';
import { initialBoardState, initialResultState } from '../../constants/board';
import RefreshIcon from '@mui/icons-material/Refresh';

const Replay: FC = () => {
  const { setBoard, setRoom, setResult, setIsBoardBlocked } = useContext(Context);

  const handleClose = (): void => {
    setBoard(initialBoardState);
    setIsBoardBlocked(true);
    setRoom('');
    setResult(initialResultState);
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      sx={{
        borderColor: '#adadad',
        color: '#adadad',
        '&:hover': {
          borderColor: '#adadad',
        },
      }}
      size="medium"
      onClick={handleClose}
      startIcon={<RefreshIcon />}
    >
      Play again
    </Button>
  );
};

export { Replay };
