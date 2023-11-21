import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {EMPTY, empty, of, Subscription, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ICollection, IProduct, IProductFilter} from "../../shared/interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit, OnDestroy {

  collection!: ICollection;
  products: IProduct[] = [];
  productFilters: IProductFilter[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    const getCollectionStream$ = this.route.queryParams.pipe(
      switchMap(param => {
        if (param['collectionId']) {
          return this.apiService.getCollection(param['collectionId'])
        }
        return of(EMPTY)
      })
    ).subscribe((data) => {
      this.collection = data?.data?.collection;
      this.getCollectionProducts(this.collection.id);
    });

    this.subscription.add(getCollectionStream$)
  }

  private getCollectionProducts(collectionId: number) {
    const getCollectionProductsStream$ = this.apiService.getCollectionProducts(collectionId).subscribe(data => {
      this.products = data.data.search.items;
      this.productFilters = data.data.search.facetValues;
      console.log('y[1] facetValues', this.productFilters)
    });

    this.subscription.add(getCollectionProductsStream$)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
