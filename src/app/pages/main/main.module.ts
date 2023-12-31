import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ComponentModule} from "../../components/component.module";
import {MainComponent} from "./main.component";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    RouterModule,
    CommonModule,
  ],
  exports: [MainComponent]
})
export class MainModule {
}
