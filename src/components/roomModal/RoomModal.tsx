import { FC, useContext, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';
import { Context } from '../../context/context';

const RoomModal: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { room, setRoom } = useContext(Context);

  const handleClose = (): void => {
    setOpen(false);
    setRoom(room);
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
            onChange={(e) => setRoom(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" size="small" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { RoomModal };
