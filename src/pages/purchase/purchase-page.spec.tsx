import { renderPage } from '../../../test/test-utils';
// TODO: Rename the file to follow page naming convention
import { PurchasePage } from './purchase-form';

describe('pages:purchase', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<PurchasePage />)).not.toThrow();
  });

  // TODO: Actually test the page behavior
});
