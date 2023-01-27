import { Socket } from 'socket.io-client';
import { Dispatch, SetStateAction } from 'react';
import { IResult } from './resultModel';

interface IContext {
  socket: Socket | null;
  user: string;
  room: string | null;
  result: IResult;
  isBoardBlocked: boolean;
  setUser: Dispatch<SetStateAction<string>>;
  setRoom: Dispatch<SetStateAction<string | null>>;
  setIsBoardBlocked: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<IResult>>;
}

export type { IContext };
