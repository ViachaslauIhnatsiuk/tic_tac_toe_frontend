import { FC, useContext, useRef, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';
import { Context } from '../../context/context';

const RoomModal: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { setRoom } = useContext(Context);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClose = (): void => {
    const inputValue = (inputRef.current as HTMLInputElement).value;
    setRoom(inputValue);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={() => setOpen(true)}
      >
        Enter room number
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ mt: 2 }}>
          <TextField
            autoFocus
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
    </div>
  );
};

export { RoomModal };
