import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { NarrowStackProps } from './narrow-stack.types';

export function NarrowStack({
  title,
  children,
}: NarrowStackProps): JSX.Element {
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
        <Box m={theme => theme.spacing(3, 0)}>
          <Typography variant="h1">{title}</Typography>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
