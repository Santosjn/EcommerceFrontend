import { Component, OnInit } from '@angular/core';

import { Product } from './product';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `    
    <div class="page-header" id="main_header">
    	<h1>{{title}} App</h1>
    </div>
    <my-products><my-products>
  `,
  styles: [`
  	#main_header {
      text-align: center;      
    }
  `]
  
})

export class AppComponent {
  title = 'Ecommerce'; 
}
