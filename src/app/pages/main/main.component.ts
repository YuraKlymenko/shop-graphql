import {Component} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {Subscription} from "rxjs";
import {ICollection} from "../../shared/interfaces";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  collections: ICollection[] = [];

  private subscription: Subscription = new Subscription()

  constructor(private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    const getCollectionProductsStream$ = this.apiService.getCollections().subscribe((categories: any) => {
      this.collections = categories.data.collections.items;
    });

    this.subscription.add(getCollectionProductsStream$)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
