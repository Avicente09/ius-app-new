import type { BorderRadius, Colors, GreyShades } from './presentation/theming';

declare module '@mui/material/styles' {
  interface Theme {
    grayShades: GreyShades;
    borderRadius: BorderRadius;
    colors: Colors;
  }
  interface ThemeOptions {
    grayShades?: GreyShades;
    borderRadius?: BorderRadius;
    colors?: Colors;
  }
}

// Hack to override the default theme type on multiple namespaces exported by MUI.
declare module '@mui/material' {
  interface Theme {
    grayShades: GreyShades;
    borderRadius: BorderRadius;
    colors: Colors;
  }
  interface ThemeOptions {
    grayShades?: GreyShades;
    borderRadius?: BorderRadius;
    colors?: Colors;
  }
}
