import { FC } from 'react';
import { Box } from '@mui/material';
import { BoardCellProps } from '../../models/boardCellProps';
import { boardCellStyles } from '../../constants/elementStyles';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';

const BoardCell: FC<BoardCellProps> = ({ handleClick, id, value }) => {
  return (
    <Box id={id} onClick={handleClick} sx={boardCellStyles}>
      {!value ? null : value === 'X' ? (
        <CloseIcon fontSize="large" />
      ) : (
        <CircleIcon fontSize="large" />
      )}
    </Box>
  );
};

export { BoardCell };
