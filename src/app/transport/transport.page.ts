import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage implements OnInit {
  dataObj: any;

  constructor(private checkSession: ChecksessionService, private bahnhofDataService: BahnhofdataService) { 
  }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
    this.dataObj = this.bahnhofDataService.transport();
    console.log(this.dataObj);
  }
}
