import { FC, useContext, useRef, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';
import { Context } from '../../context/context';
import { initialBoardState } from '../../constants/board';

const RoomModal: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { board, isBoardBlocked, setRoom, setIsBoardBlocked } = useContext(Context);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClose = (): void => {
    const inputValue = (inputRef.current as HTMLInputElement).value;
    setRoom(inputValue);
    setOpen(false);
    setIsBoardBlocked(false);
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="success"
        size="small"
        disabled={!isBoardBlocked || board !== initialBoardState}
        sx={{
          backgroundColor: '#00a682',
          ':hover': {
            backgroundColor: '#018c6e',
          },
          '&.Mui-disabled': {
            border: '1px solid #adadad',
            color: '#adadad',
          },
        }}
        onClick={() => setOpen(true)}
      >
        Enter room number
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ mt: 2 }}>
          <TextField
            autoFocus
            autoComplete="off"
            size="small"
            label="Room number"
            fullWidth
            inputRef={inputRef}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" color="success" size="small" onClick={handleClose}>
            Join the game
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { RoomModal };
