import { Injectable } from '@angular/core';

import { ShoppingCart } from './shoppingcart';

import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

	constructor(private http: Http) {}	

	getShoppingCartItems(): Observable<ShoppingCart[]>{
			return this.http
        .get(`http://localhost:8080/shoppingcart/list`)
        .map(response => response.json() as ShoppingCart[]);
	}

	deleteShoppingCartItems(shopping_cart_id: number): Observable<ShoppingCart> {			
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http		
		.delete(`http://localhost:8080/shoppingcart/delete?id=${shopping_cart_id}`, options)
        .map(response => response.json());
	} 

}