import { getDraftOrderUC } from './get-draft-order-uc';

describe('domain:use-cases:get-draft-order', () => {
  test('It should resolve using the existing draft order', async () => {
    expect.assertions(1);

    const provider = {
      getExistingDraftOrder: jest.fn(() =>
        Promise.resolve({
          id: '1',
          status: 'draft' as const,
          userId: '1',
          tasks: [],
        })
      ),
      createNewDraftOrder: jest.fn(() =>
        Promise.resolve({
          id: '2',
          status: 'draft' as const,
          userId: '1',
          tasks: [],
        })
      ),
    };

    const result = await getDraftOrderUC(provider);

    expect(result).toStrictEqual({
      id: '1',
      status: 'draft',
      userId: '1',
      tasks: [],
    });
  });

  test('It should resolve using a new draft order', async () => {
    expect.assertions(1);

    const provider = {
      getExistingDraftOrder: jest.fn(() => Promise.resolve(undefined)),
      createNewDraftOrder: jest.fn(() =>
        Promise.resolve({
          id: '2',
          status: 'draft' as const,
          userId: '1',
          tasks: [],
        })
      ),
    };

    const result = await getDraftOrderUC(provider);

    expect(result).toStrictEqual({
      id: '2',
      status: 'draft',
      userId: '1',
      tasks: [],
    });
  });
});
