import { Injectable } from '@angular/core';

import { ShoppingCart } from './shoppingcart';

import { Product } from './product';

import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

	constructor(private http: Http) {}	

	getAvailableItems(): Observable<Product[]> {
		return this.http
        .get(`http://localhost:8080/product/list`)
        .map(response => response.json() as Product[]);
	}

    saveItemToShoppingCart(item: any): Observable<Product> {	
		let body = JSON.stringify(item);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http
		.post(`http://localhost:8080/shoppingcart/new`, body, options)
        .map(response => response.json());
	}



}