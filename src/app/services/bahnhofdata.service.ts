import { Injectable } from '@angular/core';
import { Bahnhof } from 'src/custom_type_definition';
import { BahnhofpictureService } from './bahnhofpicture.service';

@Injectable({
  providedIn: 'root'
})
export class BahnhofdataService {
  bahnhof: Bahnhof | undefined;
  picture: string = '';
  responseData: any = {};
  constructor(private bahnhofpicture: BahnhofpictureService) { }

  setBahnhof(currentBahnhof: Bahnhof) {
    this.bahnhof = currentBahnhof;
    this.setPicture();
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
    return this.bahnhof?.number;
  }
  
  //parken,fahrradparkmöglichkeiten
  parken(){
    
  }

  //taxi, busanbindung
  transport(){

  }
  //bahnhofsmission, infocenter+öffnungszeiten
  //schließfächer
  //Fundbüro
  //Wifi
  //db reisezentrum
  //dblounge
  //mietwagen
  services(){

  }

  //nur die anschrift?
  anschrift(){
    return this.bahnhof?.mailingAddress;
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
