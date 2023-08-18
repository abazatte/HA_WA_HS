import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-bahnhofservices',
  templateUrl: './bahnhofservices.page.html',
  styleUrls: ['./bahnhofservices.page.scss'],
})
export class BahnhofservicesPage implements OnInit {

  constructor(private checkSession: ChecksessionService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
