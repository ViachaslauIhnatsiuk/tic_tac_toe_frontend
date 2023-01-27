import { FC } from 'react';
import { Box } from '@mui/material';
import { BoardCellProps } from '../../models/boardCellProps';
import circle from '../../assets/circle.svg';
import cross from '../../assets/cross.svg';

const BoardCell: FC<BoardCellProps> = ({ handleClick, id, value }) => {
  return (
    <Box
      id={id}
      onClick={handleClick}
      sx={{
        width: '100px',
        height: '100px',
        border: !value
          ? '1px solid #212835'
          : value === 'X'
          ? '1px solid #2475c5'
          : '1px solid #e45651',
        backgroundColor: !value ? 'transparent' : value === 'X' ? '#112439' : '#381e22',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      {!value ? null : value === 'X' ? (
        <img src={cross} alt="cross" style={{ width: '50px' }} />
      ) : (
        <img src={circle} alt="circle" style={{ width: '50px' }} />
      )}
    </Box>
  );
};

export { BoardCell };
