import { Component, OnInit } from '@angular/core';
import { ChecksessionService } from '../services/checksession.service';
import { BahnhofdataService } from '../services/bahnhofdata.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import apikeys from '../../../apikeys.json';


@Component({
  selector: 'app-anschrift',
  templateUrl: './anschrift.page.html',
  styleUrls: ['./anschrift.page.scss'],
})
export class AnschriftPage implements OnInit {
  safeSrc: SafeResourceUrl;
  srcString: string = "https://www.google.com/maps/embed/v1/place?key=" +apikeys[0]["api-key"];
  public screenHeightCustom: number = 400;

  constructor(private checkSession: ChecksessionService, private bahnhofDataService: BahnhofdataService,private sanitizer: DomSanitizer) { 
    if(this.bahnhofDataService.anschrift()){
      this.srcString += this.bahnhofDataService.anschrift();
    }
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.srcString);
    this.screenHeightCustom = Math.floor(window.innerHeight * 0.80);
  }

  ngOnInit() {
    this.checkSession.checkIfNotLoggedIn();
  }

}
