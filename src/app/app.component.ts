import { Component, OnInit } from '@angular/core';

import { Product } from './product';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  	.table {
      color: #000;      
    }
  `],
  providers: [ProductService]  
})

export class AppComponent implements OnInit {
  title = 'Ecommerce';
  
  products: Product[];
   
  constructor(private productService: ProductService) { }

  getProducts(): void {
  	// this.productService.getProducts().then(products => this.products = products);
  	this.productService.getProducts()
  	.subscribe(products => this.products = products);
  }

  ngOnInit(): void {
  	this.getProducts();  	
  }
}







