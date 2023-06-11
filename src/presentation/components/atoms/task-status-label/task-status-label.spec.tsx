import { render } from '../../../../../test/test-utils';
import { TaskStatusLabel } from './task-status-label';

describe('presentation:components:atoms:task-status-label', () => {
  test('It renders without crashing', () => {
    expect(() => render(<TaskStatusLabel status="done" />)).not.toThrow();
  });

  test('It renders the correct label for Pending status', () => {
    const { getByText } = render(<TaskStatusLabel status="pending" />);
    expect(getByText('PENDIENTE')).toBeInTheDocument();
  });

  test('It renders the correct label for Done status', () => {
    const { getByText } = render(<TaskStatusLabel status="done" />);
    expect(getByText('HECHO')).toBeInTheDocument();
  });
});
