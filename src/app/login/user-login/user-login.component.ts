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
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.userLoginForm = this.formBuilder.group({
        'userName': ['admin', [Validators.required]],
        'password': ['admin', [Validators.required]],
    });
    }
    login() {
        console.log("Loin suceesfully:"+this.userLoginForm.value);  
        this.router.navigateByUrl('/home');
    }
    ngOnInit() {
    
    }
}
