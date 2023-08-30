import { Component, inject} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BehaviorSubject, debounce, interval, map, Observable, switchMap } from 'rxjs';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  template: `
    <div class="container">
      <button role="button" class="secondary" (click)="resetProducts()">Limpar Dados</button>

      <h5 class="m-bottom">Cadastro</h5>
      <app-tab-product
        *ngIf="products$ | async as products"
        [products]="products"
        (productChanged)="productChanged($event)"
        (productRemoved)="productRemoved($event)"
      ></app-tab-product>

      <h5 class="m-bottom">Cálculo de Preço</h5>
      <input placeholder="Filtrar por Fabricante" ngModel="" (ngModelChange)="searchTerm$.next($event)" />
      <app-tab-prices
        *ngIf="productsFiltered$ | async as products"
        [products]="products"
        (productChanged)="productChanged($event)"
      ></app-tab-prices>
    </div>
  `,
})
export class ProductsComponent {

  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private _productService = inject(ProductService);
  products$: Observable<ProductInterface[]> = this._productService.products$;
  productsFiltered$: Observable<ProductInterface[]> = this.searchTerm$.pipe(
    debounce( () => interval(400)),
    switchMap(term =>
      this.products$.pipe(
        map((_) =>
          _.filter(items => items.fabricator.toLowerCase().includes(term.toLowerCase()))
        )
      )
    )
  );

  productChanged(product: ProductInterface): void {
    this._productService.changeProduct(product);
  }

  productRemoved(product: ProductInterface): void {
    this._productService.removeProduct(product);
  }

  resetProducts(): void {
    this._productService.setProducts([]);
  }
}
