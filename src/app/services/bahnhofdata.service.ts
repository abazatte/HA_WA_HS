import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BahnhofdataService {
  data: {} = {};
  constructor() { }

  setData(searchData: {}) {
    this.data = searchData;
  }

  barrierefreiheit() {

  }
  
  parken(){

  }

  transport(){

  }

  services(){

  }

  anschrift(){

  }
}
