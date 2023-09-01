import { Injectable } from '@angular/core';
import { Client, Account, ID } from "appwrite";

import apikeys from '../../../apikeys.json';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  apikey = apikeys[4];

  client = new Client()
    .setEndpoint("" + this.apikey["api-endpoint"]) // Your API Endpoint
    .setProject("" + this.apikey["project-id"]);               // Your project ID

  account = new Account(this.client);
  promise: any;
  constructor() { }

  createAuthAccount(username: string, password: string){
    return this.account.create(
      ID.unique(),
      username,
      password
    );
    /*this.promise = this.account.create(
      ID.unique(),
      username,
      password
    );
    this.promise.then(function (response: any) {
      console.log(response);
    }, function (error: any) {
      console.log(error);
    });*/
  }

  createAuthEmailSession(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.account.createEmailSession(email, password)
        .then((response: any) => {
          console.log(response);
          resolve(response); 
        })
        .catch((error: any) => {
          console.log(error);
          reject(error); 
        });
    });
  }

  async checkSession(){
    if(!this.account) return {'notExist': true};
    this.promise = this.account.get();
    this.promise.then(function (response: any) {
      console.log(response);
    }, function (error: any) {
      console.log(error);
    });
    return this.promise;
  }

  async deleteSession(){
    await this.account.deleteSession('current');
  }
}

