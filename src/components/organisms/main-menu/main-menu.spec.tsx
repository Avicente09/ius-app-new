import { render } from '../../../../test/test-utils';
import { MainMenu } from './main-menu';

describe('components:molecules:main-menu-option-button', () => {
  test('It should render without crashing', () => {
    expect(() => render(<MainMenu />)).not.toThrow();
  });

  //TODO: Add more tests
});
