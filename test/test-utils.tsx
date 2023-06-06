import ThemeProvider from '@mui/system/ThemeProvider';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { iUSTheme } from '../src/presentation/theming';

export type CustomRenderOptions = Omit<RenderOptions, 'queries'>;

export function AllTheProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={iUSTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
const customRender = (
  ui: React.ReactElement | JSX.Element,
  options?: CustomRenderOptions
) =>
  render(ui, {
    wrapper: props => <AllTheProviders {...props} />,
    ...options,
  });

function setup(jsx: React.ReactElement | JSX.Element) {
  return {
    user: userEvent,
    ...customRender(jsx),
  };
}

export * from '@testing-library/react';
export { customRender as render, setup };
