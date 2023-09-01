import { Component, OnInit } from '@angular/core';
import { AppwriteService } from '../services/appwrite.service';
import { Router } from '@angular/router';
import { ChecksessionService } from '../services/checksession.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
 
  constructor(private appwriteService: AppwriteService, private router: Router, private checksession: ChecksessionService) { }

  ngOnInit() {
  }

  async login(){
    if(this.email && this.password) {
      this.appwriteService.createAuthEmailSession(this.email, this.password).then(() => {
        this.checksession.checkIfLoggedIn();
      });
    }
    if(await this.appwriteService.checkSession()) this.router.navigate(['/search']);
  }
}

