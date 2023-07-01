import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationSearchService {
  toSearch: string;

  constructor() {
    this.toSearch = '';
  }

  setToSearch(value: string) {
    this.toSearch = value;
  }

  getToSearch() {
    return this.toSearch;
  }
}
