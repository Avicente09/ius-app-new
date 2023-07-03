import Box from '@mui/material/Box';
import type { PropsWithChildren } from 'react';

export function ClearNarrowStack({ children }: PropsWithChildren): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
