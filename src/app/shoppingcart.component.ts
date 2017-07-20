import { Component, OnInit } from '@angular/core';

import { ShoppingCart } from './shoppingcart';

import { ShoppingCartService } from './shoppingcart.service';

@Component({
  selector: 'my-shopping-cart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']  
})

export class ShoppingCartComponent implements OnInit {  	
	shoppingCartItems: ShoppingCart[];
	errorMessage: string;

	constructor(private shoppingCartService: ShoppingCartService) { }

	getShoppingCartItems(): void {  	
	  	this.shoppingCartService.getShoppingCartItems()
	  	.subscribe(
	  		items => this.shoppingCartItems = items,
	  		error => this.errorMessage = <any>error
	  	);
	}

    ngOnInit(): void {
    	this.getShoppingCartItems();     	   	
    }

}







