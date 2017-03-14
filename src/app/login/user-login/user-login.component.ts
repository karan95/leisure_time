import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    userLoginForm: FormGroup;
    userRegisterForm: FormGroup;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.userLoginForm = this.formBuilder.group({
            'userName': ['admin', [Validators.required]],
            'password': ['admin', [Validators.required]],
        });
        this.userRegisterForm = this.formBuilder.group({
            'name': ['karan', [Validators.required]],
            'userName': ['karan95', [Validators.required]],
            'email': ['abc@xyz.com ', [Validators.required]],
            'password': ['admin', [Validators.required]],
            'birthDate': ['', [Validators.required]],
            'gender':['', [Validators.required]]
        });
    }
    login() {
        console.log("Login suceesfully:"+this.userLoginForm.value);
        console.log("register suceesfully:"+this.userRegisterForm.value);
        this.router.navigateByUrl('/home');
    }
    ngOnInit() {
    
    }
}
