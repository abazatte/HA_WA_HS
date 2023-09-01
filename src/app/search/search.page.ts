import { Component, OnInit } from '@angular/core';
import { StationSearchService } from '../services/station-search.service';
import { Observable } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';

import { ChecksessionService } from '../services/checksession.service';
import { Bahnhof } from 'src/custom_type_definition';
import { FastaService } from '../services/fasta.service';
import { Router } from '@angular/router';
import { BahnhofdataService } from '../services/bahnhofdata.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import apikeys from '../../../apikeys.json';
import { AppwriteService } from '../services/appwrite.service';


@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit{
  latitude: number = 0;
  longitude: number = 0;

  bahnhof: string = '';
  responseData: any;
  bahnhoefe$: Observable<any> = new Observable<any>;
  //bahnhoefeStatic: Bahnhof[];

  selectedBahnhof: Bahnhof |undefined;
  
  safeSrc: SafeResourceUrl;
  srcString: string = "https://www.google.com/maps/embed/v1/place?key=" +apikeys[0]["api-key"];
  public screenHeightCustom: number = 400;

  constructor(private stationSearchService: StationSearchService, private checkSession: ChecksessionService, private fasta: FastaService, private router: Router, private bahnhofDataService : BahnhofdataService, private sanitizer: DomSanitizer, private appwrite: AppwriteService) {
    //this.bahnhoefeStatic = this.stationSearchService.getBahnhoefeFromLocalFile();
    this.bahnhoefe$ = this.stationSearchService.performGetOnNodeBackend();
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.srcString);
    this.getCurrentLocation().then(() => {
      this.srcString += '&q=' + this.latitude + ',' + this.longitude;
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.srcString);
      this.screenHeightCustom = Math.floor(window.innerHeight * 0.80);
    });
  }

  ngOnInit(){
    // this.bahnhoefe$ = this.stationSearchService.performGetRequest();
    this.checkSession.checkIfNotLoggedIn();
  }

  navigateToBahnhofView(){
    if(this.selectedBahnhof != undefined){
      this.bahnhofDataService.setBahnhof(this.selectedBahnhof);
      this.router.navigate(['/home']);
    } else{
      //TODO: fehler anzeigen, das kein bahnhof ausgesucht wurde
    }
  }

  async getCurrentLocation() {
    var promise = Promise.resolve();
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    return promise;
  }

  logout() {
    console.log('clicked');
    this.appwrite.deleteSession();
    this.router.navigate(['/login']);
  }

  /*
  
  getBahnhof(){
    if (this.bahnhof) this.stationSearchService.setToSearch(this.bahnhof);
    this.bahnhof = '';

    //wie kann man ohne subscribe arbeiten?
    this.stationSearchService.performGetRequest().subscribe(
      (response) => {
        this.responseData = response;
        console.log('Data:', this.responseData);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }*/

}
