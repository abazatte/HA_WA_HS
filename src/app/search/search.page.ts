import { Component, OnInit } from '@angular/core';
import { StationSearchService } from '../services/station-search.service';
import { Observable } from 'rxjs';

import { ChecksessionService } from '../services/checksession.service';
import { Bahnhof } from 'src/bahnhof';

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

  constructor(private stationSearchService: StationSearchService, private checkSession: ChecksessionService) {
    this.bahnhoefeStatic = this.stationSearchService.getBahnhoefeFromLocalFile();
  }

  ngOnInit(){
    // this.bahnhoefe$ = this.stationSearchService.performGetRequest();
    this.checkSession.checkIfNotLoggedIn();
  }


  /*
    this.checkSession.checkIfNotLoggedIn();
  }
  
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
