import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  user: '',
  room: '',
  isBoardBlocked: true,
  setUser: () => '',
  setRoom: () => '',
  setIsBoardBlocked: () => true,
});

export { Context };
