import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.cartDetails();
    this.loadCart();
  }

  getCartDetails:any = [];
  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')|| "{}");
    }
  }

  incQnt( productId: any, quantity: any | number){
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].productId === productId){
        if(quantity!= 5){
          this.getCartDetails[i].quantity = parseInt(quantity) +1;
        }
        
      }
    }

    localStorage.setItem('localCart', JSON.stringify( this.getCartDetails));
    this.loadCart();
    } 

    

    decQnt( productId: any, quantity: any | number){
      for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].productId === productId){
          if(quantity!= 1){
            this.getCartDetails[i].quantity = parseInt(quantity) -1;
          }
          
        }
      }
  
      localStorage.setItem('localCart', JSON.stringify( this.getCartDetails));
      this.loadCart();
      } 

      grandTotal: number = 0;
      loadCart(){
        if(localStorage.getItem('localCart')){
          this.getCartDetails = JSON.parse(localStorage.getItem('localCart')|| "{}");
          this.grandTotal = this.getCartDetails.reduce(function(acc:any, val:any){
            return acc + (val.price * val.quantity);
          }, 0);


        }
      }

      removeAll(){
        localStorage.removeItem('localCart');
        this.getCartDetails = [];
        this.grandTotal = 0;
        this.cartNumber = 0;
        this.auth.cartSubject.next(this.cartNumber);
        //this.loadCart();
      }


      singleDelete(getCartDetail: { productId: any; }){
        console.log(getCartDetail.productId)
        if(localStorage.getItem('localCart')){
          this.getCartDetails = JSON.parse(localStorage.getItem('localCart')|| "{}");
          for(let i=0; i<this.getCartDetails.length; i++){
            if(this.getCartDetails[i].productId === getCartDetail){
              this.getCartDetails.splice(i, 1);
              localStorage.setItem('localCart', JSON.stringify( this.getCartDetails));
              this.loadCart();
              this.cartNumFun();
              
            }
          }
        }
      }

      cartNumber:number = 0;
      cartNumFun(){
        var cartValue = JSON.parse(localStorage.getItem('localCart')|| "{}");
        this.cartNumber= cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
        
      }


}
