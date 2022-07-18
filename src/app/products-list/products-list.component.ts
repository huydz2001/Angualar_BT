import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../product';
import { ProductAlertComponent } from '../product-alert/product-alert.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }
  Share():void{
    window.alert("The product has been shared");
  }

  onNotify():void{
    window.alert("You will be notified when the product goes on sale");
  }

}
