import { createContext } from 'react';

import { IContext } from '../models/contextModel';

const Context = createContext<IContext>({
  user: '',
  room: '',
  setUser: () => '',
  setRoom: () => '',
});

export { Context };
