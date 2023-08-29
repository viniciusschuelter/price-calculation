import { Component, Input } from '@angular/core';
import { ProductTabMock } from '../../mocks/product.mock';
import { NgFor } from '@angular/common';
import { ProductInterface, ProductTabInterface } from '../../interfaces/product.interface';

@Component({
  standalone: true,
  selector: 'app-tab-prices',
  imports: [NgFor],
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let item of productTabMock">{{ item.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td *ngFor="let item of productTabMock">{{ product[item.prop] }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class TabPricesComponent {

  @Input({required: true}) products: ProductInterface[] = [];
  productTabMock: ProductTabInterface[] = ProductTabMock;
}
