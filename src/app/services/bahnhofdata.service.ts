import { Injectable } from '@angular/core';
import { Bahnhof } from 'src/custom_type_definition';
import { BahnhofpictureService } from './bahnhofpicture.service';
import { FastaService } from './fasta.service';

@Injectable({
  providedIn: 'root'
})
export class BahnhofdataService {
  bahnhof: Bahnhof | undefined;
  picture: string = '';
  responseData: any = {};
  fastaData: any = {};
  
  constructor(private bahnhofpicture: BahnhofpictureService, private fasta: FastaService) {
    console.log("Bahnhofdata createDecipheriv.")
  }

  setBahnhof(currentBahnhof: Bahnhof) {
    this.bahnhof = currentBahnhof;
    this.fasta.setToSearch("" + this.bahnhof?.number);
    this.setPicture();
    this.setFasta();
  }

  getBahnhof(){
    return this.bahnhof;
  }

  //bild(von der bilder api mithilfe der zahl) und name
  mainmenu(){
    let menuInfo = {
      number : this.bahnhof?.number,
      name : this.bahnhof?.name,
    }
    return menuInfo;
  }

  //nummer für fasta, mobilitaetsservice,   steplessaccess
  barrierefreiheit() {
    let obj = { };
    if(this.bahnhof) obj = { fasta: this.fastaData ,hasMobilityService: this.bahnhof.hasMobilityService, hasSteplessAccess: this.bahnhof.hasSteplessAccess }
    return obj;
  }
  
  //parken,fahrradparkmöglichkeiten
  parken(){
    let obj = { };
    if(this.bahnhof) obj = { hasParking: this.bahnhof.hasParking, hasBicycleParking: this.bahnhof.hasBicycleParking }
    return obj;
  }

  //taxi, busanbindung
  transport(){
    let obj = { };
    if(this.bahnhof) obj = { hasTaxiRank: this.bahnhof.hasTaxiRank, hasTravelNecessities: this.bahnhof.hasTravelNecessities }
    return obj;
  }
  //bahnhofsmission, infocenter+öffnungszeiten
  //schließfächer
  //Fundbüro
  //Wifi
  //db reisezentrum
  //dblounge
  //mietwagen
  services(){
    let obj = { hasRailwayMission: false, hasTravelCenter: false, hasDBLounge: false, hasLostAndFound: false, localServiceStaff: {}, hasCarRental: false, hasWiFi: false, hasLockerSystem: false };  
    if(this.bahnhof) obj = { hasRailwayMission: this.bahnhof.hasRailwayMission, hasTravelCenter: this.bahnhof.hasTravelCenter, hasDBLounge: this.bahnhof.hasDBLounge, hasLostAndFound: this.bahnhof.hasLostAndFound, localServiceStaff: this.bahnhof.localServiceStaff, hasCarRental: this.bahnhof.hasCarRental, hasWiFi: this.bahnhof.hasWiFi, hasLockerSystem: this.bahnhof.hasLockerSystem }
    return obj;
  }

  //nur die anschrift?
  anschrift(){
    if(this.bahnhof){
      let address = '&q=' + this.bahnhof?.mailingAddress.city + ',' + this.bahnhof?.mailingAddress.zipcode + ',' + this.bahnhof?.mailingAddress.street;
      let replaced = address.replace(/ /g, '+');
      return replaced;
    }else{
      return undefined;
    }
  }

  setFasta(){
    this.fasta.performGetRequest().subscribe(
      (response) => {
        this.fastaData = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  setPicture(){
    this.bahnhofpicture.performGetRequest(this.bahnhof?.number).subscribe(
      (response) => {
        //this.responseData.photoBaseUrl
        this.responseData = response;

        this.picture = this.responseData.photoBaseUrl + this.responseData.stations[0].photos[0].path;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getPicture() {
    return this.picture;
  }
}
