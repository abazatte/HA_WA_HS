import { Injectable,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import apikeys from '../../../apikeys.json';
import { Observable } from 'rxjs';
import _data from '../../../alleBahnhoefe.json';
import { Bahnhof,BahnAPIResponse } from 'src/custom_type_definition';
import { BucketAppwriteService } from './bucket-appwrite.service';
import { BahnhofDatabaseService } from './bahnhof-database.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Idee: aufgrund der Limitationen der API, einmal am Tag die JSON updaten, und dann von der JSON datei auslesen
 */
export class StationSearchService {
  toSearch: string;
  

  constructor(private http: HttpClient, private bahnhofDatabaseService : BahnhofDatabaseService, private bucketAppwriteService : BucketAppwriteService) {
    this.toSearch = '';
  }

  

  setToSearch(value: string) {
    this.toSearch = value;
  }

  getBahnhoefeFromLocalFile(){
    var data = _data as BahnAPIResponse;
    var BahnhoefeStatic : Bahnhof[] = data["result"];
    this.bucketAppwriteService.uploadHardCodedFile();
    return BahnhoefeStatic;
  }

  performGetRequest() {
    //wenn mit zahlen gesucht werden soll
    //const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/station-data/v2/stations/${this.toSearch}`;
    //wenn mit string gesucht werden soll
    //const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/station-data/v2/stations?searchstring=${this.toSearch}*`;
    const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/station-data/v2/stations`;
    const headers = new HttpHeaders({
      'DB-Client-Id': apikeys[1]['client-id']!,
      'DB-Api-Key': apikeys[1]['api-key'],
      'accept': 'application/json'
    });

    return this.http.get(url, { headers });
  }

  performGetOnNodeBackend(){
    const url = "http://134.255.219.65:3000/api/aktuelleBahnhoefe";
    return this.http.get(url);
  }
}
