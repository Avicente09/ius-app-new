import { render } from '../../../../../test/test-utils';
import { Form } from './form';

describe('presentation:components:molecules:form', () => {
  test('It should render without crashing', () => {
    expect(() => render(<Form />)).not.toThrow();
  });
});
