import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const WelcomePage: FC = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Typography
        variant="h4"
        sx={{ color: blue[700], textAlign: 'center', fontWeight: 700 }}
      >
        Let`s play Tic Tac Toe!
      </Typography>
      <Typography variant="h6" sx={{ color: blue[500] }}>
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
        }}
      >
        <TextField
          autoComplete="off"
          fullWidth
          label="Name"
          size="small"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          color="success"
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
