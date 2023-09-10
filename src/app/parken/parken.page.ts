import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';

@Component({
  selector: 'app-parken',
  templateUrl: './parken.page.html',
  styleUrls: ['./parken.page.scss'],
})
export class ParkenPage implements OnInit {
  dataObj: any;

  constructor(private checkSession: ChecksessionService, private bahnhofDataService: BahnhofdataService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
    this.dataObj = this.bahnhofDataService.parken();
    console.log(this.dataObj);
  }
}
