import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { Route, RouterModule } from '@angular/router';
import { TabProductComponent } from '../../components/tab-product/tab-product.component';
import { TabPricesComponent } from '../../components/tab-prices/tab-prices.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    RouterModule.forChild(routes),
    TabProductComponent,
    TabPricesComponent,
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
