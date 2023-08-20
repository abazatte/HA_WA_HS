import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BahnhofpictureService {

  constructor(private http: HttpClient) { }

  performGetRequest(idToSearch: number | undefined) {
    //hier get Request an Fasta
    const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/api.railway-stations.org/photoStationById/DE/${idToSearch}`;
    const headers = new HttpHeaders({
      'accept': 'application/json'
    });
    //console.log(this.http.get(url, {headers}));
    return this.http.get(url, { headers });
  }
  //https://apis.deutschebahn.com/db-api-marketplace/apis/api.railway-stations.org/photoStationById/DE/4787
}
