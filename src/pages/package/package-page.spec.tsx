import { renderPage } from '../../../test/test-utils';
import { PackagePage } from './package-page';

describe('pages:package', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<PackagePage />)).not.toThrow();
  });

  // TODO: Actually test the page behavior
});
