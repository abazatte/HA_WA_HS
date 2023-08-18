import { Component, OnInit } from '@angular/core';
import { AppwriteService } from '../services/appwrite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private appwriteService: AppwriteService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.email && this.password) this.appwriteService.createAuthAccount(this.email, this.password);
    this.router.navigate(['/login']);
  }
}
