import type { Theme, ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';

import type { BorderRadius, Colors, GreyShades } from '../../types';

const grayShades: GreyShades = {
  100: 'hsl(0, 0%, 100%)',
  200: 'hsl(0, 0%, 95%)',
  300: 'hsl(0, 0%, 90%)',
  400: 'hsl(0, 0%, 75%)',
  500: 'hsl(0, 0%, 61%)',
  600: 'hsl(0, 0%, 45%)',
  700: 'hsl(0, 0%, 29%)',
  800: 'hsl(0, 0%, 15%)',
  900: 'hsl(207, 20%, 9%)',
};

const borderRadius: BorderRadius = {
  none: '0',
  small: '4px',
  medium: '8px',
  large: '16px',
  full: '100%',
};

const colors: Colors = {
  white: '#ffffff',
  black: '#000000',
};

const extraOptions = {
  grayShades,
  borderRadius,
  colors,
};

const baseOptions: ThemeOptions = {
  spacing: [0, 4, 8, 12, 16, 24, 32, 40, 48, 60],
  palette: {
    warning: {
      main: '#ffc24d',
      light: '#fff8e1',
      dark: '#ffc24d',
      contrastText: '#2a2e60',
    },
    success: {
      main: '#87be42',
      light: '#e8f3d9',
      dark: '#87be42',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e45d59',
      light: '#fde9e8',
      dark: '#e45d59',
      contrastText: '#ffffff',
    },
  },
};

export function withBaseTheme(options?: ThemeOptions): Theme {
  return createTheme(deepmerge(baseOptions, options), extraOptions);
}
