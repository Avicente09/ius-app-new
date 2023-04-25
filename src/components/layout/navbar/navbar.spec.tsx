import { render } from '../../../../test/test-utils';
import { Navbar } from './navbar';

describe('components:layout:content', () => {
  test('It should render without crashing', () => {
    expect(() => render(<Navbar />)).not.toThrow();
  });

  //TODO: Add more tests
});
