import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  user: '',
  room: 0,
  socket: null,
  setUser: () => '',
  setRoom: () => null,
  setSocket: () => null,
});

export { Context };
