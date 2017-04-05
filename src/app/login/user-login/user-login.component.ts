import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/user/authentication.service';

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
        private formBuilder: FormBuilder,
        private _authenticationService: AuthenticationService,
        private _userService: UserService
    ) {
        this.userLoginForm = this.formBuilder.group({
            'userName': ['', [Validators.required]],
            'password': ['', [Validators.required]],
        });
        this.userRegisterForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'userName': ['', [Validators.required]],
            'email': ['', [Validators.required]],
            'password': ['', [Validators.required]],
            'birthDate': ['', [Validators.required]],
            'gender':['', [Validators.required]]
        });
    }

    login() {
        // this.loading = true;
        let userLoginData = JSON.stringify(this.userLoginForm.value);
        this._authenticationService.login(userLoginData)
            .subscribe(
                data => {debugger;
                    this.router.navigateByUrl('/home');
                    console.log(data);
                    // this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log("error in Login");
                    // this.alertService.error(error);
                    // this.loading = false;
            });
    }
    
    register() {
        // this.loading = true;
        let userData = JSON.stringify(this.userRegisterForm.value);
        this._userService.create(userData)
            .subscribe(
                data => {
                    this.userRegisterForm.reset();
                    console.log("user registered");
                    // this.alertService.success('Registration successful', true);
                    // this.router.navigate(['/login']);
                },
                error => {
                    console.log("error inuser registration");
                    // this.alertService.error(error);
                    // this.loading = false;
                });
    }
    ngOnInit() {
    
    }
}
