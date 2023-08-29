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

  changeProduct(product: ProductInterface): void {
    const products = this.getProducts().filter( _ => _.id !== product.id).map( _ => ({..._, editing: false}));
    this.setProducts([...products, product].sort( (a, b) => a.id - b.id));
  };

  removeProduct(product: ProductInterface): void {
    this.setProducts(this.getProducts().filter( _ => _.id !== product.id));
  }
}
