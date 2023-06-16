import { renderPage } from '../../../test/test-utils';
import { SummaryPage } from './summary-page';

describe('pages:summary', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<SummaryPage />)).not.toThrow();
  });

  // TODO: Actually test the page behavior
});
