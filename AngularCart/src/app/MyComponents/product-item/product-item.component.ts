import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from, Subject } from 'rxjs';
import { Product } from 'src/app/Product';
import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product = new Product;
  @Input() i: number | undefined;
  @Output() productDelete: EventEmitter<Product> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Product> = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onClick(product: Product){
    this.productDelete.emit(product);
    console.log("onClick has been triggerd")
  }
  // onCheckboxClick(product){
  //   console.log(product)
  //   this.todoCheckbox.emit(product);
  // }

  inc(product: { quantity: number; }){
    //console.log(todo.quantity);
    if(product.quantity != 5){
      product.quantity += 1;
    }
    
  }

  dec(todo: { quantity: number; }){

    if(todo.quantity != 1){
      todo.quantity -= 1;
    }
  }

  itemsCart:any = [];

  addCart(product: { quantity: any; productId: any; }){
    

    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet:any = [];
      storeDataGet.push(product);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else{
      var product = product;
      
      var id =product.productId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')|| "{}");

      for(let i=0; i<this.itemsCart.length; i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].productId)){
          this.itemsCart[i].quantity = product.quantity;
          index = i;
          break;

        }

      }

      if(index == -1){
        this.itemsCart.push(product);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
      else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }

    }
    this.cartNumFun();
  }

  cartNumber:number = 0;
  cartNumFun(){
    var cartValue = JSON.parse(localStorage.getItem('localCart')|| "{}");
    this.cartNumber= cartValue.length;
    this.auth.cartSubject.next(this.cartNumber)
    
  }

}
