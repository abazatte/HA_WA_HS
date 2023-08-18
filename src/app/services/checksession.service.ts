import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChecksessionService {

  constructor(private router: Router) { }

  checkIfNotLoggedIn(){
    let returnValue = localStorage.getItem('cookieFallback'); 
    if(!returnValue) this.router.navigate(['/login']);
  }
}
