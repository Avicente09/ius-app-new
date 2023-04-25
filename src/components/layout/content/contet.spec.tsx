import { render } from '../../../../test/test-utils';
import { Content } from './content';

describe('components:layout:content', () => {
  test('It should render without crashing', () => {
    expect(() =>
      render(
        <Content>
          <div>Some content</div>
        </Content>
      )
    ).not.toThrow();
  });

  test('It should render children', () => {
    const { getByText } = render(
      <Content>
        <div>Some content</div>
      </Content>
    );

    expect(getByText('Some content')).toBeInTheDocument();
  });
});
