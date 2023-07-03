import ThemeProvider from '@mui/system/ThemeProvider';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../src/presentation/context/auth';
import { OrderProvider } from '../src/presentation/context/order';
import { iUSTheme } from '../src/presentation/theming';

export type CustomRenderOptions = Omit<RenderOptions, 'queries'>;

export function BaseProviders({ children }: PropsWithChildren) {
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
    wrapper: props => <BaseProviders {...props} />,
    ...options,
  });

function setup(jsx: React.ReactElement | JSX.Element) {
  return {
    user: userEvent,
    ...customRender(jsx),
  };
}

export function PageProviders({ children }: PropsWithChildren) {
  return (
    <BaseProviders>
      <AuthProvider>
        <OrderProvider>{children}</OrderProvider>
      </AuthProvider>
    </BaseProviders>
  );
}
const renderPage = (
  ui: React.ReactElement | JSX.Element,
  options?: CustomRenderOptions
) =>
  render(ui, {
    wrapper: props => <PageProviders {...props} />,
    ...options,
  });
function setupPage(jsx: React.ReactElement | JSX.Element) {
  return {
    user: userEvent,
    ...renderPage(jsx),
  };
}

export * from '@testing-library/react';
export { customRender as render, renderPage, setup, setupPage };
