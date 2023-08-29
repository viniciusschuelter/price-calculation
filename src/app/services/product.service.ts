import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { ProductsMock } from '../mocks/product.mock';


@Injectable({ providedIn: 'root'})
export class ProductService {

  private _productsSubject: BehaviorSubject<ProductInterface[]> = new BehaviorSubject<ProductInterface[]>(ProductsMock);
  readonly products$: Observable<ProductInterface[]> = this._productsSubject.asObservable();


  getProducts(): ProductInterface[] {
    return this._productsSubject.getValue();
  }

  setProducts(products: ProductInterface[]): void {
    this._productsSubject.next(products);
  }
}
