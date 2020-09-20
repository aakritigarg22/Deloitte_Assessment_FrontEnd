import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public searchText: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  public setSearchValue(searchText) {
    this.searchText.next(searchText);
}

public getSearchResults(): Observable<boolean> {
  return this.searchText.asObservable();
}

}
