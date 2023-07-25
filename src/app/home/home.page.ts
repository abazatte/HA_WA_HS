import { Component } from '@angular/core';


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

  constructor() {
    this.icons = ['airplane-outline','aperture-outline'];
  }

}
