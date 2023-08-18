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
  text: string[];

  constructor(private checksessionService: ChecksessionService, ) {
    this.icons = ['airplane-outline','aperture-outline'];
    this.text = ['barrierefreiheit', 'parken', 'transport', 'bahnhofservices', 'anschrift'];
  }

  ngOnInit() {
    this.checksessionService.checkIfNotLoggedIn();
  }
}