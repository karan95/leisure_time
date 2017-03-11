import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      'name': ['karan', [Validators.required]],
      'userName': ['karan95', [Validators.required]],
      'email': ['abc@xyz.com ', [Validators.required]],
      'password': ['admin', [Validators.required]],
      'birthDate': ['', [Validators.required]],
      'gender':['', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  submit() {debugger;
      console.log("user created:"+this.userRegisterForm.value);  
      this.router.navigateByUrl('/login');
  }

}
