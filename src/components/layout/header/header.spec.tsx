import { render } from '../../../../test/test-utils';
import { Header } from './header';

describe('components:layout:header', () => {
  test('It should render without crashing', () => {
    expect(() => render(<Header />)).not.toThrow();
  });
});
