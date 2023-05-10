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
      }}
    >
      <Box
        sx={{
          maxWidth: '900px',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Box
          sx={theme => ({
            m: theme.spacing(9, 0),
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          })}
        >
          <Typography variant="h2" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
