import { Dispatch, SetStateAction } from 'react';

interface IContext {
  user: string;
  room: string | null;
  isBoardBlocked: boolean;
  setUser: Dispatch<SetStateAction<string>>;
  setRoom: Dispatch<SetStateAction<string | null>>;
  setIsBoardBlocked: Dispatch<SetStateAction<boolean>>;
}

export type { IContext };
