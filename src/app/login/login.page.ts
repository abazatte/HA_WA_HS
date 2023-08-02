import { Component, OnInit } from '@angular/core';
import { AppwriteService } from '../services/appwrite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private appwriteService: AppwriteService) { }

  ngOnInit() {
  }

  register(){
    if(this.email && this.password) this.appwriteService.createAuthAccount(this.email, this.password);
  
  }
}

