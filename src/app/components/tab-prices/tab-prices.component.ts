import {Component, EventEmitter, Input, Output} from '@angular/core';
import {initialProduct, PriceTabMock} from '../../mocks/product.mock';
import { NgFor, NgIf } from '@angular/common';
import { ProductInterface, ProductTabInterface } from '../../interfaces/product.interface';
import { TotalSumPipe } from '../../pipes/total-sum/total-sum.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-tab-prices',
  templateUrl: './tab-prices.component.html',
  imports: [NgFor, NgIf, TotalSumPipe, FormsModule]
})
export class TabPricesComponent {
  @Input({required: true}) products: ProductInterface[] = [];
  @Output() productChanged: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();

  productSelected: ProductInterface = initialProduct;
  columnSelected: keyof ProductInterface = 'price';
  priceTabMock: ProductTabInterface[] = PriceTabMock;

  editColumn(product: ProductInterface, column: keyof ProductInterface): void {
    this.productSelected = product;
    this.columnSelected = column;
  }

  changeColumn(value: number): void {
    //@ts-ignore
    this.productSelected[this.columnSelected] = value;
  }

  saveColumn(): void {
    this.productChanged.emit(this.productSelected);
    this.productSelected = { ...initialProduct };
  }
}
