import { Component, OnInit } from '@angular/core';
import { StationSearchService } from '../services/station-search.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit{

  bahnhof: string = '';
  responseData: any;
  bahnhoefe$: Observable<any> = new Observable<any>;

  constructor(private stationSearchService: StationSearchService) {}

  ngOnInit(){
    this.bahnhoefe$ = this.stationSearchService.performGetRequest();
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
