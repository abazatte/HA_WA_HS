import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import apikeys from '../../../apikeys.json';

@Injectable({
  providedIn: 'root'
})
export class FastaService {
  toSearch: string;

  constructor(private http: HttpClient) {
    this.toSearch = '';
  }

  setToSearch(value: string) {
    this.toSearch = value;
  }
  performGetRequest() {
    //hier get Request an Fasta
    const url = `https://apis.deutschebahn.com/db-api-marketplace/apis/fasta/v2/facilities?stationnumber=${this.toSearch}`;
    const headers = new HttpHeaders({
      'DB-Client-Id': apikeys[1]['client-id']!,
      'DB-Api-Key': apikeys[1]['api-key'],
      'accept': 'application/json'
    });

    return this.http.get(url, { headers });
  }
}
