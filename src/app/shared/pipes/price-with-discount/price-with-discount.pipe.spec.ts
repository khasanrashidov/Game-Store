import { PriceWithDiscountPipe } from './price-with-discount.pipe';

describe('PriceWithDiscountPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceWithDiscountPipe();
    expect(pipe).toBeTruthy();
  });
});
