import { createContext } from 'react';
import { initialResultState } from '../constants/board';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  socket: null,
  user: '',
  room: '',
  result: initialResultState,
  isBoardBlocked: true,
  setUser: () => '',
  setRoom: () => '',
  setIsBoardBlocked: () => true,
  setResult: () => initialResultState,
});

export { Context };
