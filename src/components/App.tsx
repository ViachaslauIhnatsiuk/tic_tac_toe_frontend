import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { WelcomePage } from './pages/WelcomePage';
import { MainPage } from './pages/MainPage';
import { Context } from '../context/context';
import { io, Socket } from 'socket.io-client';

const newSocket = io('http://localhost:4000');

const App: FC = () => {
  const [user, setUser] = useState<string>('');
  const [room, setRoom] = useState<number | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (room) {
      newSocket.emit('join', room);
    }
  }, [room]);

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
        <Context.Provider
          value={{
            user,
            room,
            socket,
            setUser,
            setRoom,
            setSocket,
          }}
        >
          <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/" element={!user ? <MainPage /> : <Navigate to="/welcome" />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </Container>
  );
};

export { App };
