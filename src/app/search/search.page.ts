import { Component } from '@angular/core';
import { StationSearchService } from '../services/station-search.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  bahnhof: string = '';

  constructor(private stationSearchService: StationSearchService) {}

  getBahnhof(){
    if (this.bahnhof) this.stationSearchService.setToSearch(this.bahnhof);
    console.log(this.stationSearchService.getToSearch());
    this.bahnhof = '';
  }

}
