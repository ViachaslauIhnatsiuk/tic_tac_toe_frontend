import { FC, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { WelcomePage } from './pages/WelcomePage';
import { MainPage } from './pages/MainPage';

const App: FC = () => {
  const [user, setUser] = useState<string>('');
  const [room, setRoom] = useState<number | null>(null);

  return (
    <Container
      maxWidth="md"
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/" element={user ? <MainPage /> : <Navigate to="/welcome" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export { App };
