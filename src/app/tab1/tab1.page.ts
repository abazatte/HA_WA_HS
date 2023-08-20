import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMapsModule } from '@angular/google-maps';

import apikeys from '../../../apikeys.json';
import { getSafePropertyAccessString } from '@angular/compiler';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  srcString: string = "https://www.google.com/maps/embed/v1/place?key=" +apikeys[0]["api-key"] + "&q=Osnabrück,Theodor-Heuss-Platz+2" ;
  safeSrc: SafeResourceUrl;

  constructor( private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.srcString);
  }

  getSrcString(){
    console.log(this.srcString);
    return this.srcString;
  }

}
