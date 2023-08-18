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
    this.promise = this.account.create(
      ID.unique(),
      username,
      password
    );
    this.promise.then(function (response: any) {
      console.log(response);
    }, function (error: any) {
      console.log(error);
    });
  }

  createAuthEmailSession(email: string, password: string) {
    this.promise = this.account.createEmailSession(email, password);
    this.promise.then(function (response: any) {
      console.log(response);
    }, function (error: any) {
      console.log(error);
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
}

