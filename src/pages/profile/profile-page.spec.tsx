import { renderPage } from '../../../test/test-utils';
import { ProfilePage } from './profile-page';

describe('pages:profile', () => {
  test('It should render without crashing', () => {
    expect(() => renderPage(<ProfilePage />)).not.toThrow();
  });
});
