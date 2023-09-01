import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChecksessionService {

  constructor(private router: Router) { }

  checkIfNotLoggedIn(){
    let check = localStorage.getItem('cookieFallback'); 
    if(!check) this.router.navigate(['/login']);
  }

  checkIfLoggedIn() {
    let check = localStorage.getItem('cookieFallback');
    if(check) this.router.navigate(['/search']);
  }
}
