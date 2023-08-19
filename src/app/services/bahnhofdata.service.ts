import { Injectable } from '@angular/core';
import { Bahnhof } from 'src/custom_type_definition';

@Injectable({
  providedIn: 'root'
})
export class BahnhofdataService {
  bahnhof: Bahnhof | undefined;
  constructor() { }

  setBahnhof(currentBahnhof: Bahnhof) {
    this.bahnhof = currentBahnhof;
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
}
