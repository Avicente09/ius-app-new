import { renderPage } from '../../../../../test/test-utils';
import { Header } from './header';

describe('components:layout:header', () => {
  test('It should render without crashing', () => {
    // Using render page since Headers needs the page providers. Use render instead of renderPage if possible.
    expect(() => renderPage(<Header />)).not.toThrow();
  });
});
