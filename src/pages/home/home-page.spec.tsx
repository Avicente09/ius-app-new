import { renderPage } from '../../../test/test-utils';
import { HomePage } from './home-page';

describe('pages:home', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<HomePage />)).not.toThrow();
  });

  // TODO: add more tests!
});
