import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage implements OnInit {

  constructor(private checkSession: ChecksessionService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
