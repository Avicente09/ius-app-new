import { render } from '../../../../../test/test-utils';
import { MapControl } from './map-control';

jest.mock('@tomtom-international/web-sdk-maps', () => ({
  map: jest.fn().mockReturnValue({ remove: jest.fn() }),
}));

describe('src/presentation/components/molecules/map-control', () => {
  test('It should render without crashing', () => {
    expect(() => render(<MapControl />)).not.toThrow();
  });
});
