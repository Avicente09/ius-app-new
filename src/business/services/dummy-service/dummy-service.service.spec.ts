import { dummyService } from './dummy-service.service';

describe('business:services:dummy-service', () => {
  it('should work', () => {
    expect(dummyService()).toEqual('this is a dummy service');
  });
});
