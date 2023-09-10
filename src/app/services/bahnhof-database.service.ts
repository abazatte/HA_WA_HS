import { Injectable } from '@angular/core';
import { Client, Databases, ID } from "appwrite";
import apikeys from '../../../apikeys.json';
import _data from '../../../alleBahnhoefe.json';

@Injectable({
  providedIn: 'root'
})
export class BahnhofDatabaseService {
  apikey = apikeys[4];
  client = new Client()
    .setEndpoint("" + this.apikey["api-endpoint"]) // Your API Endpoint
    .setProject("" + this.apikey["project-id"]);               // Your project ID

  databases = new Databases(this.client);
  databaseID = '64ec84437432c1129787';
  collectionID = '64ec95508442fff744cc';

  constructor() {
  }

  createAlleBahnhoefeDocument() {
    const promise =
      this.databases.createDocument
        (this.databaseID, this.collectionID, ID.unique(), _data);

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
  }

  createTestDocument(){
    const promise =
      this.databases.createDocument
        (this.databaseID, this.collectionID, ID.unique(), {test : 1});

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
  }

  listAlleDocuments() {
    const promise = this.databases.listDocuments(this.databaseID, this.collectionID);

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
  }
}
