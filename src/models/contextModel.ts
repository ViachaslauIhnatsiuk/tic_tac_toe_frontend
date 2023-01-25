import { Socket } from 'socket.io-client';
import { Dispatch, SetStateAction } from 'react';

interface IContext {
  user: string;
  room: number | null;
  socket: Socket | null;
  setUser: Dispatch<SetStateAction<string>>;
  setRoom: Dispatch<SetStateAction<number | null>>;
  setSocket: Dispatch<SetStateAction<Socket | null>>;
}

export type { IContext };
