import { Component, OnInit, Input } from '@angular/core';

import { Product } from './product';

import { ProductService } from './product.service';

import { CatalogService } from './catalog.service';

@Component({
  selector: 'my-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']  
})

export class CatalogComponent implements OnInit  {  	
	
	Items: Product[];
	errorMessage: string; 	
	quantidade: number;

	constructor(private catalogService: CatalogService) { }
	
	getAvailableItems(): void {  	
	  	this.catalogService.getAvailableItems()
	  	.subscribe(
	  		items => this.Items = items,
	  		error => this.errorMessage = <any>error
	  	);
    }

    saveItemToShoppingCart(item): void {    	
    	this.catalogService.saveItemToShoppingCart(item).subscribe(
        error => this.errorMessage = <any>error);        
    }

    ngOnInit(): void {
  	  this.getAvailableItems();  	
    }
  
}
