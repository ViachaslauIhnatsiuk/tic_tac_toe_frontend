import { Socket } from 'socket.io-client';
import { Dispatch, SetStateAction } from 'react';

interface IContext {
  user: string;
  room: string;
  socket: Socket | null;
  setUser: Dispatch<SetStateAction<string>>;
  setRoom: Dispatch<SetStateAction<string>>;
  setSocket: Dispatch<SetStateAction<Socket | null>>;
}

export type { IContext };
