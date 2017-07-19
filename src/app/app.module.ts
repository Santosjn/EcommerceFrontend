import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { ProductComponent } from './product.component';

import { RouterModule }   from '@angular/router';

import { ProductService } from './product.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
	  {
	    path: 'products',
	    component: ProductComponent
	  }
	]),
	FormsModule	
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
