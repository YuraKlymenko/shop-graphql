import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {CategoryComponent} from './components/category/category.component';
import {ElectronicsComponent} from './components/category/electronics/electronics.component';
import {HomegardenComponent} from './components/category/homegarden/homegarden.component';
import {SportsputdoorComponent} from './components/category/sportsputdoor/sportsputdoor.component';
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {
    path: 'category', component: CategoryComponent, children: [
      {path: 'electronics', component: ElectronicsComponent},
      {path: 'home-garden', component: HomegardenComponent},
      {path: 'sports-outdoor', component: SportsputdoorComponent}
    ]
  },
  {path: 'products', children: [
      {path: '', component: ProductsComponent},
      {path: ':productName', component: ProductDetailsComponent}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
