import type { Order } from '@domain/entities';

import { isChild } from './is-child';

describe('presentation:components:molecules:task-view:lib:is-child', () => {
  test('It should return true since the task is a child', () => {
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

    const isChildResult = isChild('task-id-2', order);

    expect(isChildResult).toBe(true);
  });

  test('It should return false since the task is not a child', () => {
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

    const isChildResult = isChild('task-id-1', order);

    expect(isChildResult).toBe(false);
  });
});
