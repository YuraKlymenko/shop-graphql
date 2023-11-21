import {Apollo, ApolloBase} from 'apollo-angular';
import {Injectable} from '@angular/core';
import {GetCollectionProductsQuery, GetCollectionQuery, GetCollectionsQuery} from "../shared/queries";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('shopExampleApollo');
  }

  getCollections(): any {
    return this.apollo.query({
      query: GetCollectionsQuery,
    });
  }

  getCollection(collectionId: number): Observable<any> {
    return this.apollo.query({
      query: GetCollectionQuery,
      variables: {
        id: collectionId,
      },
    });
  }

  getCollectionProducts(collectionId: number): Observable<any> {
    return this.apollo.query({
      query: GetCollectionProductsQuery,
      variables: {
        input: {
          groupByProduct: true,
          collectionId: collectionId,
          take: 10,
          skip: 0
        }
      },
    });
  }
}

