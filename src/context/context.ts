import { createContext } from 'react';
import { initialBoardState, initialResultState } from '../constants/board';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  socket: null,
  user: '',
  room: '',
  board: initialBoardState,
  result: initialResultState,
  isBoardBlocked: true,
  setUser: () => '',
  setRoom: () => '',
  setIsBoardBlocked: () => true,
  setResult: () => initialResultState,
  setBoard: () => initialBoardState,
});

export { Context };
