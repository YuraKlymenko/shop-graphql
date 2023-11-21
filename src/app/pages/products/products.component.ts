import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {EMPTY, of, Subscription, switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
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
              private router: Router,
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

  openProductDetails(product: IProduct): void {
    if (!product) return;
    this.router.navigate(['/products', {productName: product.productName}])
  }

  private getCollectionProducts(collectionId: number) {
    const getCollectionProductsStream$ = this.apiService.getCollectionProducts(collectionId).subscribe(data => {
      this.products = data.data.search.items;
      this.productFilters = data.data.search.facetValues;
    });

    this.subscription.add(getCollectionProductsStream$)
  }
  getFilerProduct(value:any)
  {
    this.apiService.getCollectionProducts(value).subscribe(data=>{
      // Check this logic
      this.products = data.data.search.items;
      this.productFilters = data.data.search.facetValues;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
