import { render } from '../../../test/test-utils';
import { InfoModal } from './info-modal';
import { ModalType } from './info-modal.types';

describe('componentsinfo-modal', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(
        <InfoModal
          onClose={jest.fn}
          open={true}
          title="Some title"
          type={ModalType.Info}
          message="Some message in modal"
        />
      )
    ).not.toThrow();
  });

  //TODO: Add more test to coverage all modal types
});
