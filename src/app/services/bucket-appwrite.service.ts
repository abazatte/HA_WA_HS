import { Injectable } from '@angular/core';
import { Client, Storage, ID } from "appwrite";

import apikeys from '../../../apikeys.json';
import _data from '../../../alleBahnhoefe.json';
import { BahnAPIResponse, Bahnhof } from 'src/custom_type_definition';

@Injectable({
  providedIn: 'root'
})
/**
 * wird nicht verwendet, upload funktioniert nicht
 */
export class BucketAppwriteService {
  apikey = apikeys[4];

  client = new Client()
    .setEndpoint("" + this.apikey["api-endpoint"]) // Your API Endpoint
    .setProject("" + this.apikey["project-id"]);

  storage = new Storage(this.client);

  bucketID = '64ec74228c73b482dd3a';

  /**
   * hi
   */
  uploadHardCodedFile() {
    const fileData = new File([JSON.stringify(_data)], "bahnhoefe.json", { type: "application/json" });

    const promise = this.storage.createFile(
      this.bucketID,
      ID.unique(), fileData);

    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });
  }

  getAlleBahnhoefeJSON() {
    const fileId = '64ecb9f257c0fafb5e34';

    const promise = this.storage.getFileView(this.bucketID, fileId);
    /*
    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });*/
  }

  constructor() { }
}
