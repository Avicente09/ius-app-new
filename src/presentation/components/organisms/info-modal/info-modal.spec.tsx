import { render } from '../../../../../test/test-utils';
import { InfoModal } from './info-modal';
import { ModalType } from './info-modal.types';

describe('presentation:components:organisms:info-modal', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(
        <InfoModal
          onClose={jest.fn}
          open={true}
          title="Some title"
          type={ModalType.Info}
          messages={['Some message in modal']}
        />
      )
    ).not.toThrow();
  });

  test('It should render a ModalType.Success and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={ModalType.Success}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('CORRECTO')).toBeInTheDocument();
  });

  test('It should render a ModalType.Warning and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={ModalType.Warning}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('ALERTA')).toBeInTheDocument();
  });

  test('It should render a ModalType.Error and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={ModalType.Error}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('ERROR')).toBeInTheDocument();
  });

  test('It should render a ModalType.Info and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={ModalType.Info}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('INFORMACION')).toBeInTheDocument();
  });

  test('It should render a ModalType.Neutro and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={ModalType.Neutro}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('AVISO IMPORTANTE')).toBeInTheDocument();
  });

  //TODO: Add more test to coverage all modal types
});
