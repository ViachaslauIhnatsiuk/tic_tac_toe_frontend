import { MouseEventHandler } from 'react';

export interface BoardCellProps {
  handleClick: MouseEventHandler<HTMLElement>;
  id: string;
  value: string;
}
