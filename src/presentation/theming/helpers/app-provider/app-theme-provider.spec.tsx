import { render } from '@testing-library/react';

import { iUSTheme } from '../../themes/ius';
import { AppThemeProvider } from './app-theme-provider';

describe('presentation:theming:helpers:app-provider', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(
        <AppThemeProvider theme={iUSTheme}>
          <div>Some dummy content</div>
        </AppThemeProvider>
      )
    ).not.toThrow();
  });
});
