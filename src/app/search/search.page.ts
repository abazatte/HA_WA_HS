import { Component, OnInit } from '@angular/core';
import { StationSearchService } from '../services/station-search.service';
import { Observable } from 'rxjs';

import { ChecksessionService } from '../services/checksession.service';
import { Bahnhof } from 'src/custom_type_definition';
import { FastaService } from '../services/fasta.service';
import { Router } from '@angular/router';
import { BahnhofdataService } from '../services/bahnhofdata.service';



@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit{

  bahnhof: string = '';
  responseData: any;
  bahnhoefe$: Observable<any> = new Observable<any>;
  bahnhoefeStatic: Bahnhof[];

  selectedBahnhof: Bahnhof |undefined;

  constructor(private stationSearchService: StationSearchService, private checkSession: ChecksessionService, private fasta: FastaService, private router: Router, private bahnhofDataService : BahnhofdataService) {
    this.bahnhoefeStatic = this.stationSearchService.getBahnhoefeFromLocalFile();
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
