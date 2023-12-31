import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ComponentModule} from "../../components/component.module";
import {CommonModule} from '@angular/common';
import {DecimalPipe} from '@angular/common';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    RouterModule,
    CommonModule,
  ],
  providers: [DecimalPipe],
})
export class ProductsModule {
}
