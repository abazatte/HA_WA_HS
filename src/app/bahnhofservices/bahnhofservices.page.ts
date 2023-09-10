import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';

@Component({
  selector: 'app-bahnhofservices',
  templateUrl: './bahnhofservices.page.html',
  styleUrls: ['./bahnhofservices.page.scss'],
})
export class BahnhofservicesPage implements OnInit {
  dataObj: any;

  constructor(private checkSession: ChecksessionService, private bahnhofData: BahnhofdataService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
    this.dataObj = this.bahnhofData.services();
    console.log(this.dataObj.localServiceStaff);
  }
}
