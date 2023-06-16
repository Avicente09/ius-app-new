import type {
  Theme,
  ThemeOptions,
  TypographyVariantsOptions,
} from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';
import NexaBoldFont from '@presentation/theming/fonts/nexa-bold.woff2';
import NexaBookFont from '@presentation/theming/fonts/nexa-book.woff2';
import NexaLightFont from '@presentation/theming/fonts/nexa-light.woff2';
import UrbaniBoldFont from '@presentation/theming/fonts/urbani-bold.woff2';
import UrbaniLightFont from '@presentation/theming/fonts/urbani-light.woff2';
import UrbaniRegularFont from '@presentation/theming/fonts/urbani-regular.woff2';

import type { BorderRadius, Colors, GreyShades } from '../../types';

const fontFaces = `
@font-face {
  font-family: 'Nexa';
  font-weight: 400;
  src: url(${NexaBookFont}) format('woff2');
}

  @font-face {
    font-family: 'Nexa-Light';
    font-style: light;
    font-weight: 300;
    src: local('Nexa'), local('Nexa-Light'), url(${NexaLightFont}) format('woff2');
  }

  @font-face {
    font-family: 'Nexa-Regular';
    font-style: regular;
    font-weight: 400;
    src: local('Nexa'), local('Nexa-Regular'), url(${NexaBookFont}) format('woff2');
  }

  @font-face {
    font-family: 'Nexa-Bold';
    font-style: bold;
    font-weight: 700;
    src: local('Nexa'), local('Nexa-Bold'), url(${NexaBoldFont}) format('woff2');
  }

  @font-face {
    font-family: 'Urbani';
    src: url(${UrbaniRegularFont}) format('woff2');
  }

  @font-face {
    font-family: 'Urbani-Light';
    font-style: light;
    font-weight: 300;
    src: local('Urbani'), local('Urbani-Light'), url(${UrbaniLightFont}) format('woff2');
  }

  @font-face {
    font-family: 'Urbani-Regular';
    font-style: regular;
    font-weight: 400;
    src: local('Urbani'), local('Urbani-Regular'), url(${UrbaniRegularFont}) format('woff2');
  }

  @font-face {
    font-family: 'Urbani-Bold';
    font-style: bold;
    font-weight: 700;
    src: local('Urbani'), local('Urbani-Bold'), url(${UrbaniBoldFont}) format('woff2');
  }
`;

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

const typographyBaseConfig: TypographyVariantsOptions = {
  fontFamily: 'Urbani, Nexa, Helvetica',
  h1: {
    fontFamily: 'Urbani-Bold',
  },
  h2: {
    fontFamily: 'Urbani-Bold',
  },
  h3: {
    fontFamily: 'Urbani-Bold',
  },
  h4: {
    fontFamily: 'Urbani',
  },
  h5: {
    fontFamily: 'Urbani',
  },
  h6: {
    fontFamily: 'Urbani',
  },
  subtitle1: {
    fontFamily: 'Nexa',
  },
  subtitle2: {
    fontFamily: 'Nexa',
  },
  body1: {
    fontFamily: 'Nexa',
  },
  body2: {
    fontFamily: 'Nexa',
  },
  button: {
    fontFamily: 'Nexa',
  },
  caption: {
    fontFamily: 'Nexa',
  },
  overline: {
    fontFamily: 'Nexa',
  },
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
  typography: typographyBaseConfig,
  components: {
    MuiCssBaseline: {
      styleOverrides: fontFaces,
    },
  },
};

export function withBaseTheme(options?: ThemeOptions): Theme {
  return responsiveFontSizes(
    createTheme(deepmerge(baseOptions, options), extraOptions)
  );
}
