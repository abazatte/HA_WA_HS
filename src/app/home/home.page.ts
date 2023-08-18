import { Component } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';

class Icon{
  iconName : string;
  textBelow : string;

  constructor(iconName : string, textBelow : string){
    this.iconName = iconName;
    this.textBelow = textBelow;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  icons: string[];

  constructor(private checksessionService: ChecksessionService, ) {
    this.icons = ['airplane-outline','aperture-outline'];
  }

  ngOnInit() {
    this.checksessionService.checkIfNotLoggedIn();
  }
}