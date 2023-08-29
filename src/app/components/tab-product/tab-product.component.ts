import { Component, Input } from '@angular/core';
import { ProductTabMock } from '../../mocks/product.mock';
import { NgFor, NgIf } from '@angular/common';
import { ProductInterface, ProductTabInterface } from '../../interfaces/product.interface';

@Component({
  standalone: true,
  selector: 'app-tab-product',
  imports: [NgFor, NgIf],
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let item of productTabMock">{{ item.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td *ngFor="let item of productTabMock">
            <label *ngIf="product?.editing else readonly" [for]="item.prop">
                <input
                  type="text"
                  [id]="item.prop"
                  name="firstname"
                  placeholder="First name"
                >
            </label>
            <ng-template #readonly >{{ product[item.prop] }}</ng-template>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class TabProductComponent {
  @Input({required: true}) products: ProductInterface[] = [];
  productTabMock: ProductTabInterface[] = ProductTabMock;
}
