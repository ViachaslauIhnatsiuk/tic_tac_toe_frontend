import { Dispatch, SetStateAction } from 'react';

interface IContext {
  user: string;
  room: string | null;
  setUser: Dispatch<SetStateAction<string>>;
  setRoom: Dispatch<SetStateAction<string | null>>;
}

export type { IContext };
