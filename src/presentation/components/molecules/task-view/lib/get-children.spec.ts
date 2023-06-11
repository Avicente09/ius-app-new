import type { Order } from '@domain/entities';

import { getChildren } from './get-children';

describe('presentation:components:molecules:task-view:lib:get-children', () => {
  test('It should retrieve the children of a task', () => {
    const order = {
      id: 'order-id',
      tasks: [
        {
          id: 'task-id-1',
          dependencies: ['task-id-2', 'task-id-3'],
        },
        {
          id: 'task-id-2',
          dependencies: [],
        },
        {
          id: 'task-id-3',
          dependencies: [],
        },
      ],
    } as Order;

    const children = getChildren('task-id-1', order);

    expect(children).toStrictEqual([
      {
        id: 'task-id-2',
        dependencies: [],
      },
      {
        id: 'task-id-3',
        dependencies: [],
      },
    ]);
  });
});
