import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ComponentModule} from "../../components/component.module";

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    RouterModule,
  ],
})
export class ProductsModule {
}
