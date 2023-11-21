import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from 'src/app/services/api.service';
import {APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS, ApolloModule, NamedOptions} from "apollo-angular";
import {ApolloClientOptions, InMemoryCache} from "@apollo/client/core";
import {HttpLink} from "apollo-angular/http";
import {ComponentModule} from './components/component.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {ProductsModule} from "./pages/products/products.module";


const uri = 'https://demo.vendure.io/shop-api'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentModule,
    RouterModule,
    AppRoutingModule,
    ProductsModule,
  ],
  providers: [ApiService,
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          shopExampleApollo: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://demo.vendure.io/shop-api',
            }),
          },
        };
      },
      deps: [HttpLink],
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ],
  exports: [ApolloModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
