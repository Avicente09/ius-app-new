import type { Order } from '@domain/entities';

import { render, setup } from '../../../../../test/test-utils';
import { TaskView } from './task-view';

const mockOrder: Order = {
  id: '1',
  status: 'draft',
  userId: '1',
  tasks: [
    {
      id: '1',
      type: 'pickUp',
      status: 'pending',
      instruction: 'Pickup instruction for task 1',
      address: {
        department: 'Quetzaltenango',
        town: 'Quetzaltenango',
        village: 'Zona 3',
        address: 'Calle Rodolfo Robles',
      },
    },
    {
      id: '2',
      type: 'pickUp',
      status: 'pending',
      instruction: 'Pickup instruction for task 2',
      address: {
        department: 'Quetzaltenango',
        town: 'Quetzaltenango',
        village: 'Zona 1',
        address: 'Parque Central',
      },
    },
    {
      id: '3',
      type: 'deliver',
      status: 'pending',
      instruction: 'Deliver Instruction',
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
        reference: 'Casa del Ache Colop',
      },
      dependencies: ['1', '2'],
    },
  ],
};

describe('presentation:components:molecules:task-view', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(<TaskView order={mockOrder} mainTaskId="3" onRemove={jest.fn()} />)
    ).not.toThrow();
  });

  test('It should render without crashing when there are a wrong mainTaskId', () => {
    expect(() =>
      render(<TaskView order={mockOrder} mainTaskId="4" onRemove={jest.fn()} />)
    ).not.toThrow();
  });

  test('It should render the details of the mainTaskId', () => {
    expect.assertions(1);

    const { getByText } = render(
      <TaskView order={mockOrder} mainTaskId="3" onRemove={jest.fn()} />
    );

    expect(getByText('Deliver Instruction')).toBeInTheDocument();
    //TODO: Add more assertions, mainly for the address/location details
  });

  test('It should not render the details of the mainTaskId since it is a child task', () => {
    expect.assertions(1);

    const { queryByText } = render(
      <TaskView order={mockOrder} mainTaskId="2" onRemove={jest.fn()} />
    );

    expect(
      queryByText('Pickup instruction for task 2')
    ).not.toBeInTheDocument();
    //TODO: Add more assertions, mainly for the address/location details
  });

  test('It should call onRemove when the close button is clicked', async () => {
    expect.assertions(1);

    const onRemove = jest.fn();
    const { getByTestId, user } = setup(
      <TaskView order={mockOrder} mainTaskId="3" onRemove={onRemove} />
    );

    await user.click(getByTestId('remove-task-3-button'));

    expect(onRemove).toHaveBeenCalledWith('3');
  });
});
