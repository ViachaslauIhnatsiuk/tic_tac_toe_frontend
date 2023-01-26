import { FC } from 'react';
import { Box } from '@mui/material';

const BoardCell: FC<{ handleClick: any; id: string; value: string }> = ({
  handleClick,
  id,
  value,
}) => {
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
      {value}
    </Box>
  );
};

export { BoardCell };
