import { Component, OnInit } from '@angular/core';

import { ShoppingCart } from './shoppingcart';

import { ShoppingCartService } from './shoppingcart.service';

@Component({
  selector: 'my-shopping-cart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']  
})

export class ShoppingCartComponent implements OnInit {  	
	shoppingCartItems: ShoppingCart[] = [];
	errorMessage: string;
	valor_frete: number = 11.50;
	subTotal: number = 0;
	total: number = 0;

	constructor(private shoppingCartService: ShoppingCartService) { }

	getShoppingCartItems(): void {  	
	  	this.shoppingCartService.getShoppingCartItems()
	  	.subscribe(
	  		items => this.shoppingCartItems = items,
	  		error => this.errorMessage = <any>error,
	  		() => this.shoppingCartCalculations()
	  	);
	}

	removeShoppingCartItems(shopping_cart_id): void{		
		this.shoppingCartService.deleteShoppingCartItems(shopping_cart_id)
		.subscribe(
			null,
            error => this.errorMessage = <any>error,
            () => this.getShoppingCartItems() 
        );          
	}

	//  ***** this helps !
	// .subscribe(
	// 		null,
    //      error => console.log("Error => ", error),
    //      () => this.getShoppingCartItems() 
    //  );

    shoppingCartCalculations(): void{
    	this.subTotal = this.total = 0;
    	for (var i = this.shoppingCartItems.length - 1; i >= 0; i--) {    		
    		this.subTotal += this.shoppingCartItems[i].quantidade * this.shoppingCartItems[i].valor;
    	}
    	this.total = this.subTotal + this.valor_frete;    	
    }

    ngOnInit(): void {
    	this.getShoppingCartItems();     	   	
    }

}







