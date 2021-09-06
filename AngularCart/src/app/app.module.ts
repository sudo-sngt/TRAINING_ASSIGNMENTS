import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './MyComponents/products/products.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { ProductItemComponent } from './MyComponents/product-item/product-item.component';
import { AddProductComponent } from './MyComponents/add-product/add-product.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ProductItemComponent,
    AddProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
