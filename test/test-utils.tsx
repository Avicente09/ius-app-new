import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export type CustomRenderOptions = Omit<RenderOptions, 'queries'>;

function setup(jsx: React.ReactElement | JSX.Element) {
  return {
    user: userEvent,
    ...render(jsx),
  };
}

export function AllTheProviders({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
const customRender = (
  ui: React.ReactElement | JSX.Element,
  options?: CustomRenderOptions
) =>
  render(ui, {
    wrapper: props => <AllTheProviders {...props} />,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render, setup };
