import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-parken',
  templateUrl: './parken.page.html',
  styleUrls: ['./parken.page.scss'],
})
export class ParkenPage implements OnInit {

  constructor(private checkSession: ChecksessionService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
