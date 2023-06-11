import type { Order } from '@domain/entities';

import { render, setup } from '../../../../../test/test-utils';
import { OrderView } from './order-view';

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

describe('presentation:components:organisms:order-view', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(
        <OrderView
          order={mockOrder}
          onEdit={jest.fn()}
          onPlacement={jest.fn()}
          onRemoveTask={jest.fn()}
        />
      )
    ).not.toThrow();
  });

  test('It should call the onEdit function when the edit button is clicked', async () => {
    expect.assertions(1);

    const onEdit = jest.fn();
    const { user, getByText } = setup(
      <OrderView
        order={mockOrder}
        onEdit={onEdit}
        onPlacement={jest.fn()}
        onRemoveTask={jest.fn()}
      />
    );

    await user.click(getByText('Agregar Tareas'));

    expect(onEdit).toHaveBeenCalled();
  });

  test('It should call the onPlacement function when the placement button is clicked', async () => {
    expect.assertions(1);

    const onPlacement = jest.fn();
    const { user, getByText } = setup(
      <OrderView
        order={mockOrder}
        onEdit={jest.fn()}
        onPlacement={onPlacement}
        onRemoveTask={jest.fn()}
      />
    );

    await user.click(getByText('Enviar Orden'));

    expect(onPlacement).toHaveBeenCalled();
  });
});
