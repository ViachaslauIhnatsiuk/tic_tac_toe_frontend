export const getUpdatedBoard = (
  board: string[],
  player: string,
  id: number | string,
): string[] => {
  return board.map((cell, index) => {
    if (index === Number(id)) {
      return (cell = player === 'O' ? 'X' : 'O');
    }
    return cell;
  });
};
