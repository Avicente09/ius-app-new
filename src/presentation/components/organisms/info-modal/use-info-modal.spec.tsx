import { render, setup, waitFor } from '../../../../../test/test-utils';
import { useInfoModal } from './use-info-modal';

const onAccept = jest.fn();

describe('presentation:components:organisms:info-modal:hook', () => {
  const WrapperComponent = () => {
    const { renderedModal } = useInfoModal(
      {
        isOpen: true,
      },
      onAccept
    );
    return <div>{renderedModal}</div>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should render without crashing', () => {
    expect(() => render(<WrapperComponent />)).not.toThrow();
  });

  test('It should call the onAccept callback and then close the modal', async () => {
    expect.hasAssertions();

    const { user, getByText, queryByText } = setup(<WrapperComponent />);

    await user.click(getByText('Aceptar'));
    expect(onAccept).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(queryByText('Aceptar')).not.toBeInTheDocument();
    });
  });
});
