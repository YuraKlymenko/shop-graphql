import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ComponentModule} from "../../components/component.module";
import {ProductDetailsComponent} from "./product-details.component";

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    RouterModule,
  ],
})
export class ProductDetailsModule {
}
