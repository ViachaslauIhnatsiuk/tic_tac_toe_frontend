import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';

const WelcomePage: FC = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Typography variant="h4" sx={{ color: '#2475c5', textAlign: 'center' }}>
        Let`s play Tic Tac Toe!
      </Typography>
      <Typography variant="h6" sx={{ color: '#adadad', textAlign: 'center' }}>
        Please enter a name to continue
      </Typography>
      <Paper
        sx={{
          px: 3,
          py: 5,
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          backgroundColor: '#212835',
        }}
      >
        <TextField
          autoComplete="off"
          fullWidth
          label="Name"
          size="small"
          value={user}
          sx={{
            input: {
              color: '#adadad',
            },
            '& .MuiFormLabel-root': {
              color: '#adadad',
            },
          }}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          sx={{
            backgroundColor: '#2475c5',
            '&.Mui-disabled': {
              border: '1px solid #adadad',
              color: '#adadad',
            },
          }}
          variant="contained"
          disabled={!user}
          onClick={() => navigate('/')}
        >
          Continue
        </Button>
      </Paper>
    </Stack>
  );
};

export { WelcomePage };
