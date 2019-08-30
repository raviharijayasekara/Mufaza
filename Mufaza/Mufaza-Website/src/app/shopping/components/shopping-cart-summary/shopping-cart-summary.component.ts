import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PromotionService} from 'shared/services/promotion.service';
import {Promotions} from 'shared/models/Promotions';
import { FirebaseListObservable } from 'angularfire2/database';
import{ShoppingCartSummary} from '../../../shared/models/shopping-cart-summary';
import { NewPriceService } from 'shared/services/new-price.service';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit{


  @Input('cart') cart: ShoppingCart;
  promocode: string;
  promo: boolean = false;
  error:boolean= false;
  newPrice: number;
  public promotions: FirebaseListObservable<Promotions[]>;


  constructor(public promotionService: PromotionService, private sharedService: NewPriceService){

}

ngOnInit(){
  this.promotions = this.promotionService.getPromoList({});
}

  promotion(promocode: string){
    this.promocode = promocode;

    if(this.promocode === "10off") {
      this.promo = true;
      this.error = false;
      this.newPrice = (this.cart.totalPrice - (this.cart.totalPrice * 0.1));
      this.sharedService.addnewprice(this.newPrice);
    }
    else {
      this.error= true;
      this.promo = false;
<<<<<<< HEAD
      this.newPrice = this.cart.totalPrice;
      this.sharedService.newPrice=this.newPrice;
=======
      this.sharedService.addnewprice(0);
>>>>>>> 04a85923682ce9a89044f467218f7747ee12bcf3
    }
  }

  addValue(val){
    this.sharedService.updatenewPrice(val);
  }
}
