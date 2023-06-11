import { createDraftOrder } from './create-draft-order';

describe('implementation:adapters:create-draft-order', () => {
  test('It should return the draft order', async () => {
    expect.assertions(1);

    const draftOrder = await createDraftOrder();

    expect(draftOrder).toStrictEqual({
      id: undefined,
      userId: undefined,
      status: 'draft',
      tasks: [],
    });
  });
});
