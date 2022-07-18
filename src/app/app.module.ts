import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { Route, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

const routers:Route[] =[
  { 
    path: 'products/:productId', 
    component: ProductDetailsComponent
  },
  {
    path: 'products', 
    component: ProductsListComponent
  },
  {
    path:'',
    redirectTo: 'products',
    pathMatch : 'full'
  },
  {
    path: 'cart', 
    component: CartComponent
  },
  {
    path: 'shipping', 
    component: ShippingComponent
  },

];


@NgModule({
  declarations: [
 
    AppComponent,
    ProductsListComponent,
    TopBarComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
