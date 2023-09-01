import { Component, OnInit } from '@angular/core';
import { AppwriteService } from '../services/appwrite.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isToastOpen = false;
  toastMessage = "";
  email: string = '';
  password: string = '';

  registerForm: FormGroup;


  constructor(private appwriteService: AppwriteService, private router: Router
    ,private cd: ChangeDetectorRef, public formBuilder: FormBuilder) {
      this.registerForm = this.formBuilder.group({
        emailForm: ['', [Validators.required, Validators.email]],
        passwordForm:['', Validators.required]
      })

     }

  ngOnInit() {
  }

  register(){
    if(this.email && this.password) {
      this.appwriteService.createAuthAccount(this.email, this.password).then((response: any) => {
        this.toastMessage = "Account Registriert!";
        this.setOpen(true);
        this.router.navigate(['/login']);
      },(error: any) => {
        //hier ne error msg anzeigen
        this.toastMessage = error.message;
        this.setOpen(true);
      });
      
    }
    
  }

  
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
