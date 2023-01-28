import { render } from '../../../test/test-utils';
import { Dummy } from './dummy';

describe('components:dummy-component', () => {
  test('Dummy - should render correctly', () => {
    const { queryByText } = render(<Dummy />);

    expect(queryByText('dummy text')).toBeVisible();
  });
});