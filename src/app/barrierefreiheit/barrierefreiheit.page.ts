import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-barrierefreiheit',
  templateUrl: './barrierefreiheit.page.html',
  styleUrls: ['./barrierefreiheit.page.scss'],
})
export class BarrierefreiheitPage implements OnInit {

  constructor(private checkSession: ChecksessionService) { }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
