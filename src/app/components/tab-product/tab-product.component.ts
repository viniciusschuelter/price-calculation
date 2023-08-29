import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { ProductTabMock } from '../../mocks/product.mock';
import { NgFor, NgIf } from '@angular/common';
import { ProductInterface, ProductTabInterface } from '../../interfaces/product.interface';
import {FormGroup, FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tab-product',
  imports: [NgFor, NgIf, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="formGroupProduct">
      <table>
        <thead>
          <tr>
            <th *ngFor="let item of productTabMock">{{ item.header }}</th>
            <th><a (click)="newProduct()">Add+</a></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of products">
            <td *ngFor="let item of productTabMock">
                <label *ngIf="product?.editing else readonly" [for]="item.prop">
                  <input
                    [type]="item.type"
                    [id]="item.prop"
                    [placeholder]="item.header"
                    [formControlName]="item.prop"
                  />
                </label>
              <ng-template #readonly >{{ product[item.prop] }}</ng-template>
            </td>
            <td style="cursor: pointer">
              <ng-container *ngIf="!product?.editing">
                <a style="padding-right: 8px" (click)="editProduct(product)">✎</a>
                <a (click)="removeProduct(product)">X</a>
              </ng-container>
              <a *ngIf="product?.editing" (click)="saveProduct()">✓</a>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  `
})
export class TabProductComponent {

  @Input({ required: true }) products: any[] = [];
  @Output() productChanged: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  @Output() productRemoved: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();

  productTabMock: ProductTabInterface[] = ProductTabMock;
  initialProduct: ProductInterface = { id: 0, fabricator: '', name: '', description: '', price: 0, discount: 0 };
  private _formBuilder = inject(FormBuilder);
  formGroupProduct: FormGroup =  this._formBuilder.group({ ...this.initialProduct });

  newProduct(): void {
    const id = (this.products[this.products.length - 1]?.id || 0) + 1;
    this.editProduct({ ...this.initialProduct, id });
  }

  editProduct(product: ProductInterface): void {
    this.formGroupProduct.reset({ ...product })
    this.productChanged.emit({ ...product, editing: true });
  }

  saveProduct(): void {
    this.productChanged.emit({ ...this.formGroupProduct.value, editing: false });
  }

  removeProduct(product: ProductInterface): void {
    this.productRemoved.emit(product);
  }
}
