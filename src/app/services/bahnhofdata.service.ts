import { Injectable } from '@angular/core';
import { Bahnhof } from 'src/custom_type_definition';

@Injectable({
  providedIn: 'root'
})
export class BahnhofdataService {
  bahnhof: Bahnhof | undefined;
  constructor() { }

  setBahnhof(currentBahnhof: Bahnhof) {
    this.bahnhof = currentBahnhof;
  }

  barrierefreiheit() {
    return this.bahnhof?.number;
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
