import type { Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

export interface AppThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}
