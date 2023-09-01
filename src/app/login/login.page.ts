import { Component, OnInit } from '@angular/core';
import { AppwriteService } from '../services/appwrite.service';
import { Router } from '@angular/router';
import { ChecksessionService } from '../services/checksession.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  loginForm: FormGroup;
 
  constructor(private appwriteService: AppwriteService, private router: Router, private checksession: ChecksessionService
    , private cd: ChangeDetectorRef, public formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      emailForm: ['', [Validators.required, Validators.email]],
      passwordForm:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  async login(){
    if(this.email && this.password) {
      this.appwriteService.createAuthEmailSession(this.email, this.password).then((response: any) => {
        this.checksession.checkIfLoggedIn();
      },(error: any) => {
        //hier ne error msg anzeigen
        console.log(error.message);
      });
    }
    if(await this.appwriteService.checkSession()) this.router.navigate(['/search']);
  }
}

