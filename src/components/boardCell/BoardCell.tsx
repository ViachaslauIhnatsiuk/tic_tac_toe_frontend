import { FC } from 'react';
import { Box } from '@mui/material';

const BoardCell: FC<{ id: string; value: string }> = ({ id, value }) => {
  return (
    <Box
      id={id}
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
