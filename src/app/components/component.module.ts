import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { ElectronicsComponent } from './category/electronics/electronics.component';
import { HomegardenComponent } from './category/homegarden/homegarden.component';
import { SportsputdoorComponent } from './category/sportsputdoor/sportsputdoor.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoryComponent,
    ElectronicsComponent,
    HomegardenComponent,
    SportsputdoorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
  ]
})
export class ComponentModule { }
