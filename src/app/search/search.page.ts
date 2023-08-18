import { Component } from '@angular/core';
import { StationSearchService } from '../services/station-search.service';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  bahnhof: string = '';
  responseData: any;

  constructor(private stationSearchService: StationSearchService, private checkSession: ChecksessionService) {}

  ngOnInit(){
    this.checkSession.checkIfNotLoggedIn();
  }
  
  getBahnhof(){
    if (this.bahnhof) this.stationSearchService.setToSearch(this.bahnhof);
    this.bahnhof = '';

    this.stationSearchService.performGetRequest().subscribe(
      (response) => {
        this.responseData = response;
        console.log('Data:', this.responseData);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
