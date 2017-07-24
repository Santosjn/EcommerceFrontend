import { Injectable } from '@angular/core';

import { Product } from './product';

import{ PRODUCTS } from './mock-products';

import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

	constructor(private http: Http) {}	

	getProducts(): Observable<Product[]> {
		return this.http
        .get(`http://localhost:8080/product/list`)
        .map(response => response.json() as Product[]);
	} 
	
	saveProduct(product: Product): Observable<Product> {	
		let body = JSON.stringify(product);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http
		.post(`http://localhost:8080/product/new`, body, options)
        .map(response => response.json());
	}

	updateProduct(product: Product): Observable<Product> {			
		let body = JSON.stringify(product);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http		
		.put(`http://localhost:8080/product/update`, body, options)
        .map(response => response.json());
	} 	

	deleteProduct(product: Product): Observable<Product> {			
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http		
		.delete(`http://localhost:8080/product/delete?id=${product.id}`, options)
        .map(response => response.json());
	} 

}