import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenddataService {
  private breadcrumb$ = new BehaviorSubject("")
  returnedName = this.breadcrumb$.asObservable();
  constructor() { }

  getBreadcrumbNameMethod(value?: any) {
    this.breadcrumb$.next(value)
  }
}
