import { FC, MouseEventHandler } from 'react';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';

const BoardCell: FC<{
  handleClick: MouseEventHandler<HTMLElement>;
  id: string;
  value: string;
}> = ({ handleClick, id, value }) => {
  return (
    <Box
      id={id}
      onClick={handleClick}
      sx={{
        width: '100px',
        height: '100px',
        backgroundColor: '#eeeeee',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      {!value ? null : value === 'X' ? (
        <CloseIcon fontSize="large" />
      ) : (
        <CircleIcon fontSize="large" />
      )}
    </Box>
  );
};

export { BoardCell };
