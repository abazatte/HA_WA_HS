import { Component, OnInit } from '@angular/core';
import { AppwriteService } from '../services/appwrite.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
 
  constructor(private appwriteService: AppwriteService, private router: Router) { }

  ngOnInit() {
  }

  async login(){
    if(this.email && this.password) this.appwriteService.createAuthEmailSession(this.email, this.password);
    if(await this.appwriteService.checkSession()) this.router.navigate(['/home']);
  }
}

