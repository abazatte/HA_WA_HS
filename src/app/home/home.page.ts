import { Component } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';
import { Bahnhof } from 'src/custom_type_definition';
import { Router } from '@angular/router';

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
  numberTest: any | undefined;

  constructor(private checksessionService: ChecksessionService,private bahnhofDataService: BahnhofdataService, private router: Router) {
    this.icons = ['airplane-outline','aperture-outline'];
    this.text = ['barrierefreiheit', 'parken', 'transport', 'bahnhofservices', 'anschrift'];
  }

  ngOnInit() {
    this.checksessionService.checkIfNotLoggedIn();
    this.numberTest = this.bahnhofDataService.barrierefreiheit();
  }

  getValue(){
    return this.bahnhofDataService.barrierefreiheit();
  }

  getPicture() {
    return this.bahnhofDataService.getPicture();
  }

  changeWindow(changer: string) {

    this.router.navigate([`/${changer}`]);
  }
}