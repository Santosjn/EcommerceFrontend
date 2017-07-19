import { Component, OnInit } from '@angular/core';

import { Product } from './product';

import { ProductService } from './product.service';

@Component({
  selector: 'my-products',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  	.table {
      color: #000;      
    }
  `]  
})

export class ProductComponent implements OnInit {  
  products: Product[];
  errorMessage: string;
   
  constructor(private productService: ProductService) { }

  getProducts(): void {  	
  	this.productService.getProducts()
  	.subscribe(
  		products => this.products = products,
  		error => this.errorMessage = <any>error
  	);
  }

  ngOnInit(): void {
  	this.getProducts();  	
  }
}







