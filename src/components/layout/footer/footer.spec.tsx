import { render } from '../../../../test/test-utils';
import { Footer } from './footer';

describe('components:layout:footer', () => {
  test('It should render without crashing', () => {
    expect(() => render(<Footer />)).not.toThrow();
  });
});
