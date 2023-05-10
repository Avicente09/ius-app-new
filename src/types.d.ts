import type { BorderRadius, GreyShades } from './presentation/theming';

declare module '@mui/material/styles' {
  interface Theme {
    grayShades: GreyShades;
    borderRadius: BorderRadius;
  }
  interface ThemeOptions {
    grayShades?: GreyShades;
    borderRadius?: BorderRadius;
  }
}
