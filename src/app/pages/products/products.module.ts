import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [ProductsComponent],
})
export class ProductsModule {}
