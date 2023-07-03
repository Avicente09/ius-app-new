import { render } from '../../../../../test/test-utils';
import { InfoModal } from './info-modal';

describe('presentation:components:organisms:info-modal', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(
        <InfoModal
          onClose={jest.fn}
          open={true}
          title="Some title"
          type={'info'}
          messages={['Some message in modal']}
        />
      )
    ).not.toThrow();
  });

  test('It should render a success and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={'success'}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('CORRECTO')).toBeInTheDocument();
  });

  test('It should render a warning and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={'warning'}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('ALERTA')).toBeInTheDocument();
  });

  test('It should render a error and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={'error'}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('ERROR')).toBeInTheDocument();
  });

  test('It should render a info and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={'info'}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('INFORMACION')).toBeInTheDocument();
  });

  test('It should render a neutral and match the header text', () => {
    const { getByText } = render(
      <InfoModal
        onClose={jest.fn}
        open={true}
        title="Some title"
        type={'neutral'}
        messages={['Some message in modal']}
      />
    );

    expect(getByText('AVISO IMPORTANTE')).toBeInTheDocument();
  });

  //TODO: Add more test to coverage all modal scenarios
});
