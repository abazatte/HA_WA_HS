import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';

@Component({
  selector: 'app-anschrift',
  templateUrl: './anschrift.page.html',
  styleUrls: ['./anschrift.page.scss'],
})
export class AnschriftPage implements OnInit {

  constructor(private checkSession: ChecksessionService, private bahnhofDataService: BahnhofdataService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
