import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { ProductComponent } from './product.component';

import { ShoppingCartComponent } from './shoppingcart.component';

import { CatalogComponent } from './catalog.component';

import { RouterModule }   from '@angular/router';

import { ProductService } from './product.service';

import { ShoppingCartService } from './shoppingcart.service';

import { CatalogService } from './catalog.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShoppingCartComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
	  {
	    path: 'products',
	    component: ProductComponent
	  },
	  {
	    path: 'shoppingcart',
	    component: ShoppingCartComponent
	  },
	  {
	    path: 'catalog',
	    component: CatalogComponent
	  }
	]),
	FormsModule	
  ],
  providers: [ProductService, ShoppingCartService, CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
