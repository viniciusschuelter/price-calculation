import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { initialProduct, ProductTabMock } from '../../mocks/product.mock';
import { NgFor, NgIf } from '@angular/common';
import { ProductInterface, ProductTabInterface } from '../../interfaces/product.interface';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tab-product',
  templateUrl: './tab-product.component.html',
  imports: [NgFor, NgIf, FormsModule, ReactiveFormsModule],
})
export class TabProductComponent {
  @Input({ required: true }) products: ProductInterface[] = [];
  @Output() productChanged: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  @Output() productRemoved: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();

  private _formBuilder = inject(FormBuilder);
  formGroupProduct: FormGroup =  this._formBuilder.group({ ...initialProduct });

  productTabMock: ProductTabInterface[] = ProductTabMock;

  newProduct(): void {
    const id = (this.products[this.products.length - 1]?.id || 0) + 1;
    this.editProduct({ ...initialProduct, id });
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
