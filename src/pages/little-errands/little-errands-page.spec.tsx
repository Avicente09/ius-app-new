import { renderPage } from '../../../test/test-utils';
// TODO: Rename the file to follow page naming convention
import { LittleErrandsPage } from './little-errands-form';

describe('pages:little-errands', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<LittleErrandsPage />)).not.toThrow();
  });

  // TODO: Actually test the page behavior
});
