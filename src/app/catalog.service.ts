import { Injectable } from '@angular/core';

import { ShoppingCart } from './shoppingcart';

import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

	constructor(private http: Http) {}	

	// saveItemToShoppingCart(): Observable<ShoppingCart[]>{
	// 		return this.http
 //        .get(`http://localhost:8080/shoppingcart/list`)
 //        .map(response => response.json() as ShoppingCart[]);
	// }

}