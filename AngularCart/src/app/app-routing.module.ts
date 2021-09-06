import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './MyComponents/cart/cart.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { ProductsComponent } from './MyComponents/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path: 'header', component: HeaderComponent} ,
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
