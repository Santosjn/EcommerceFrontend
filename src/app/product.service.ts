import { Injectable } from '@angular/core';

import { Product } from './product';

import{ PRODUCTS } from './mock-products';

import { Http, Response } from '@angular/http'; 
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

	
}