import type { Order } from '@domain/entities';

import { renderPage, setupPage } from '../../../test/test-utils';
import { SummaryPage } from './summary-page';

const mockSimpleOrder: Order = {
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

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));
jest.mock('@presentation/hooks/use-current-order', () => ({
  useCurrentOrder: jest.fn(),
}));
const mockUseCurrentOrder = jest.requireMock(
  '@presentation/hooks/use-current-order'
).useCurrentOrder;

describe('pages:summary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render without crashing', () => {
    mockUseCurrentOrder.mockReturnValue({ order: mockSimpleOrder });
    expect(() => renderPage(<SummaryPage />)).not.toThrow();
  });

  test('It should navigate to the home page when the user clicks on [Agregar Tareas] button', async () => {
    expect.assertions(1);
    mockUseCurrentOrder.mockReturnValue({ order: mockSimpleOrder });

    const { getByText, user } = setupPage(<SummaryPage />);
    await user.click(getByText(/Agregar Tareas/i));

    expect(mockNavigate).toBeCalledWith('/home');
  });

  // TODO: Add tests with complex scenarios including the Order placement
});
