import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    name : 'iPhone X',
    price : 789,
    color : 'Black',
    discount : 10,
    inStock : 5,
    pImage : '/assets/images/iphone.webp'
  }
  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
  

}
