import { Component, OnInit } from '@angular/core';

import { Product } from './product';

import { ProductService } from './product.service';

@Component({
  selector: 'my-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  styles: [`
  	.table {
      color: #000;      
    }
    .product_forms{
      text-align: center;
    }
  `]  
})

export class ProductComponent implements OnInit {  
  products: Product[];  
  errorMessage: string; 
  newProduct: any = {}; 
  editedProduct: any = {};
  username: string;
  newProductForm: boolean = true;
  editProductForm: boolean = false;
   
  constructor(private productService: ProductService) { }

  showEditProductForm(product: Product): void {
    this.newProductForm = false;
    this.editProductForm = true;
    this.editedProduct = product;
  }

  showAddProductForm(): void {
    this.newProductForm = true;
    this.editProductForm = false;
  }

  getProducts(): void {  	
  	this.productService.getProducts()
  	.subscribe(
  		products => this.products = products,
  		error => this.errorMessage = <any>error
  	);
  }

  saveProduct(product): void {      
    this.productService.saveProduct(product).subscribe(
      error => this.errorMessage = <any>error);    
    this.newProduct = {};    
  }

  updateProduct(product): void {      
    this.productService.updateProduct(product).subscribe(
      error => this.errorMessage = <any>error);    
    this.editedProduct = {};
    this.showAddProductForm();
  }

  deleteProduct(product): void {      
    this.productService.deleteProduct(product).subscribe(
      error => this.errorMessage = <any>error);    
  }

  ngOnInit(): void {
  	this.getProducts();  	
  }
}







