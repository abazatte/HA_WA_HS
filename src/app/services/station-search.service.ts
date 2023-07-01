import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import apikeys from '../../../apikeys.json';

@Injectable({
  providedIn: 'root'
})
export class StationSearchService {
  toSearch: string;

  constructor(private http: HttpClient) {
    this.toSearch = '';
  }

  setToSearch(value: string) {
    this.toSearch = value;
  }

  performGetRequest() {
    const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/station-data/v2/stations/${this.toSearch}`;
    const headers = new HttpHeaders({
      'DB-Client-Id': apikeys[2]['client-id']!,
      'DB-Api-Key': apikeys[2]['api-key'],
      'accept': 'application/json'
    });

    return this.http.get(url, { headers });
  }
}
