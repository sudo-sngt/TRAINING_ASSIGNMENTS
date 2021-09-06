import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Product} from 'src/app/Product'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productId: any;
  name:any;
  img: any;
  desc:any;
  quantity: any;
  price: any;

  @Output() productAdd: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const product = {
      sno: 1,
      productId: this.productId,
      name: this.name,
      img: this.img,
      desc: this.desc,
      quantity: this.quantity,
      price: this.price,
      active: true
    }
    this.productAdd.emit(product);
    // window.location.reload();

  }
}
