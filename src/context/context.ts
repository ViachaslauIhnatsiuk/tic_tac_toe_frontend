import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  user: '',
  room: '',
  socket: null,
  setUser: () => '',
  setRoom: () => '',
  setSocket: () => null,
});

export { Context };
