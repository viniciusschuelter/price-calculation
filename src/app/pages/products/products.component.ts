import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  template: `
    <div class="container" *ngIf="products$ | async as products">

      <h5>Cadastro</h5>
      <app-tab-product
        [products]="products"
        (productChanged)="productChanged($event)"
        (productRemoved)="productRemoved($event)"
      ></app-tab-product>

      <h5>Cálculo de Preço</h5>
      <app-tab-prices [products]="products"></app-tab-prices>

    </div>
  `,
})
export class ProductsComponent {

  private _productService = inject(ProductService);
  products$: Observable<ProductInterface[]> = this._productService.products$;

  productChanged(product: ProductInterface): void {
    this._productService.changeProduct(product);
  }

  productRemoved(product: ProductInterface): void {
    this._productService.removeProduct(product);
  }
}
