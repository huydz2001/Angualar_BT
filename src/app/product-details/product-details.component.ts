import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,PRODUCTS } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export  class ProductDetailsComponent implements OnInit {

  products = PRODUCTS;
  product:Product | undefined;
  constructor(private route:ActivatedRoute, private cartService:CartService) { }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert("Your produt has been added to the cart")
  }

  

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.products.find(product => product.id === productIdFromRoute )
  }

}
