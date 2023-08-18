import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-anschrift',
  templateUrl: './anschrift.page.html',
  styleUrls: ['./anschrift.page.scss'],
})
export class AnschriftPage implements OnInit {

  constructor(private checkSession: ChecksessionService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
