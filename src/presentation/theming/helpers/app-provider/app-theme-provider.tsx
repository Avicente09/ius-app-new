import { css } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/system/ThemeProvider';

import type { AppThemeProviderProps } from './app-theme-provider.types';

export function AppThemeProvider({
  children,
  theme,
}: AppThemeProviderProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={css`
          html,
          body,
          #root {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
}
