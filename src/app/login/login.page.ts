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

  login(){
    if(this.email && this.password) this.appwriteService.createAuthEmailSession(this.email, this.password);
  }
}

