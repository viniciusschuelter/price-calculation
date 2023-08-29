import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';

@Pipe({
  standalone: true,
  name: 'totalSum'
})
export class TotalSumPipe implements PipeTransform {
  transform(value: ProductInterface[], applyDiscount = true): number {
    if (!value?.length) {
      return 0;
    }

    return value.reduce(  (acc, curr) => {
      const discount = applyDiscount ? (curr.price * (curr.discount * 0.01)) : 0;
      return acc + (curr.price - discount)
    }, 0);
  }
}
