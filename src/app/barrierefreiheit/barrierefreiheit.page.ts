import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';

@Component({
  selector: 'app-barrierefreiheit',
  templateUrl: './barrierefreiheit.page.html',
  styleUrls: ['./barrierefreiheit.page.scss'],
})
export class BarrierefreiheitPage implements OnInit {
  dataObj: any;

  constructor(private checkSession: ChecksessionService, private bahnhofDataService: BahnhofdataService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
    this.dataObj = this.bahnhofDataService.barrierefreiheit();
    console.log(this.dataObj);
  }
}
