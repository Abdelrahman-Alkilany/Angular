import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  productName:string = "New Product !";
  productImage:string ="assets\images\products.jpg";
  productDescription:string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eaque cumque asperiores consequatur unde explicabo tempora culpa perspiciatis dignissimos distinctio, maxime sed hic corporis repellat ea nam magni dolorum magnam.  ";


}
