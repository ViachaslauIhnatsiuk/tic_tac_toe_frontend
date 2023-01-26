const boardStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 1,
};

const boardCellStyles = {
  width: '100px',
  height: '100px',
  backgroundColor: '#eeeeee',
  display: 'grid',
  placeContent: 'center',
};

export { boardStyles, boardCellStyles };
