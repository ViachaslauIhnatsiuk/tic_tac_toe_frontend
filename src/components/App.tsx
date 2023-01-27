import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { WelcomePage } from './pages/WelcomePage';
import { MainPage } from './pages/MainPage';
import { Context } from '../context/context';
import { IResult } from '../models/resultModel';
import { initialBoardState, initialResultState } from '../constants/board';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const App: FC = () => {
  const [user, setUser] = useState<string>('');
  const [room, setRoom] = useState<string | null>(null);
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [result, setResult] = useState<IResult>(initialResultState);
  const [isBoardBlocked, setIsBoardBlocked] = useState<boolean>(true);

  useEffect(() => {
    if (room) {
      socket.emit('join', room);
    }
  }, [room]);

  return (
    <Container
      maxWidth="md"
      sx={{
        height: '100vh',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <BrowserRouter>
        <Context.Provider
          value={{
            socket,
            user,
            room,
            board,
            result,
            isBoardBlocked,
            setUser,
            setRoom,
            setBoard,
            setResult,
            setIsBoardBlocked,
          }}
        >
          <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/" element={user ? <MainPage /> : <Navigate to="/welcome" />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </Container>
  );
};

export { App };
