import { renderPage } from '../../../../../test/test-utils';
import { NarrowStack } from './narrow-stack';

describe('components:molecules:main-menu-option-button', () => {
  test('It should render without crashing', () => {
    expect(() =>
      renderPage(
        <NarrowStack title="Some dummy title">
          <span>Some dummy content</span>
        </NarrowStack>
      )
    ).not.toThrow();
  });

  //TODO: Add more tests
});
