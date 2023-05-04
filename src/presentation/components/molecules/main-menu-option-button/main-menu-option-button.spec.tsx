import { render } from '../../../../../test/test-utils';
import { MainMenuOptionButton } from './main-menu-option-button';

describe('components:molecules:main-menu-option-button', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(<MainMenuOptionButton text="Some option" onClick={jest.fn()} />)
    ).not.toThrow();
  });

  //TODO: Add more tests
});
