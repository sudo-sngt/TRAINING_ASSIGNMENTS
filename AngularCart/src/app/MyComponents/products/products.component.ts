import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  localItem: any;
  products: Product[];

  constructor() {
    
    this.localItem = localStorage.getItem("products");
    if(this.localItem == null){
    this.products = [];
    }
    else{ 
      this.products = JSON.parse(this.localItem); 
    }

  }

  ngOnInit(): void {
  }

  deleteProduct(product:Product){
    //console.log(product);
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.products));
  }
  addProduct(product:Product){
    console.log(product); 
    this.products.push(product); 
    localStorage.setItem("todos", JSON.stringify(this.products));
  }

}
