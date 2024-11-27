import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceWithDiscount'
})
export class PriceWithDiscountPipe implements PipeTransform {

  transform(price: number | undefined, discount: number | undefined): number {
    if (!discount || !price) {
      return price ?? 0;
    }
    const discountedPrice = price ? price - (price * discount / 100) : 0;
    return parseFloat(discountedPrice.toFixed(2));
  }
}
