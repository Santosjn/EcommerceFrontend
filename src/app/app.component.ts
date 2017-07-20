import { Component, OnInit } from '@angular/core';

import { Product } from './product';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `    
    <div class="page-header" id="main_header">
    	<h1>{{title}} App</h1>
    	<div>
	    	<h4>Navigation</h4>
	    	<a routerLink="/products"><i>Products</i></a> - 
	    	<a routerLink="/catalog"><i>Catalog</i></a> -
	        <a routerLink="/shoppingcart"><i>ShoppingCart</i></a>
        </div>      	
    </div>    
    <router-outlet></router-outlet>  
  `,
  styles: [`
  	#main_header {
      text-align: center;      
    }
  `]
  
})

export class AppComponent {
  title = 'Ecommerce';   
}