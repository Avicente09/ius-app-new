import { render } from '../../../../../test/test-utils';
import { TaskTypeLabel } from './task-type-label';

describe('presentation:components:atoms:task-status-label', () => {
  test('It renders without crashing', () => {
    expect(() => render(<TaskTypeLabel type="pickUp" />)).not.toThrow();
  });

  test('It renders the correct label for Pending status', () => {
    const { getByText } = render(<TaskTypeLabel type="pickUp" />);
    expect(getByText('RECOGER')).toBeInTheDocument();
  });

  test('It renders the correct label for Done status', () => {
    const { getByText } = render(<TaskTypeLabel type="deliver" />);
    expect(getByText('ENTREGAR')).toBeInTheDocument();
  });

  //TODO: add test for paymentRetrieval type task
});
