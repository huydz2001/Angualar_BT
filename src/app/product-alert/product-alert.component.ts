import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../product';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


}
