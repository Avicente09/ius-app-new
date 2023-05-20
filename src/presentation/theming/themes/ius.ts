import { createTheme } from '@mui/material';

import { withBaseTheme } from '../helpers';

const palette = {
  primary: {
    main: '#d00000',
    light: '#dc2f02',
    dark: '#9d0208',
    contrastText: '#ffba08',
  },
  secondary: {
    main: '#ffba08',
    light: '#ffdd00',
    dark: '#faa307',
    contrastText: '#d00000',
  },
} as const;

const baseTheme = withBaseTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.primary.light,
          },
        },
      },
    },
  },
});

export const iUSTheme = createTheme(baseTheme);
