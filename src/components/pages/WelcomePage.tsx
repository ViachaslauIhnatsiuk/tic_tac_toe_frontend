import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const WelcomePage: FC = () => {
  const [user, setUser] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate('/main');
  };

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
      <Paper sx={{ px: 3, py: 5, backgroundColor: '#12161f' }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            fullWidth
            label="Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            color="success"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!user}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
};

export { WelcomePage };
