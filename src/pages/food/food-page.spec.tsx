import { renderPage } from '../../../test/test-utils';
import { FoodPage } from './food-page';

describe('pages:food', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<FoodPage />)).not.toThrow();
  });

  // TODO: Actually test the page behavior
});
