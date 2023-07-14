import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Header } from '../../organisms';
import type { NarrowStackProps } from './narrow-stack.types';

export function NarrowStack({
  title,
  children,
}: NarrowStackProps): JSX.Element {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundImage: 'url("assets/images/ius-text.svg")',
          backgroundRepeat: 'repeat',
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
              backgroundColor: '#fff',
              borderRadius: theme.borderRadius.large,
              border: `8px solid ${theme.palette.secondary.main}`,
            })}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              color={theme => theme.palette.primary.main}
            >
              {title}
            </Typography>
          </Box>
          {children}
        </Box>
      </Box>
    </>
  );
}
