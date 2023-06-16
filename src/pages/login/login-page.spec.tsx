import { render } from '../../../test/test-utils';
import { LoginPage } from './login-page';

//TODO: Implement dynamic mocks in order to test the login page on multiple scenarios
jest.mock('@greatsumini/react-facebook-login');
jest.mock('@react-oauth/google');

describe('pages:login', () => {
  test('It should render without crashing', () => {
    expect(() => render(<LoginPage />)).not.toThrow();
  });

  // TODO: Actually test the page behavior
});
