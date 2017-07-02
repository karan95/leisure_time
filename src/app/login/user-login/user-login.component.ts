import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/user/authentication.service';
import { AlertService } from '../../lt-components/alert/alert.service';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    userLoginForm: FormGroup;
    userRegisterForm: FormGroup;
    loginDivBox = false;
    registerDivBox = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private _authenticationService: AuthenticationService,
        private _userService: UserService,
        private _alertService: AlertService
    ) {
        this.userLoginForm = this.formBuilder.group({
            'userName': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
        this.userRegisterForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'userName': ['', [Validators.required]],
            'email': ['', [CustomValidators.email]],
            'password': ['', [Validators.required]],
            'birthDate': ['', [Validators.required]],
            'gender':['', [Validators.required]]
        });
    }

    login() {
        if (this.validateUserCredentials()) {
            let userLoginData = JSON.stringify(this.userLoginForm.value);
            this._authenticationService.login(userLoginData)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/home');
                },
                error => {
                    this.loginDivBox = true;
                    this._alertService.error('The username or password is incorrect.');
            });
        }
    }
    
    register() {
        if (this.validateNewUserDetail()) {    
            let userData = JSON.stringify(this.userRegisterForm.value);
            this._userService.create(userData)
            .subscribe(
                data => {
                    this.userRegisterForm.reset();
                    this.alertPopupCheck(false, true);
                    this._alertService.success('Registration successful', true);
                },
                error => {
                    this.alertPopupCheck(false, true);
                    this._alertService.error('User registration unsuccessful.');
                });
        }
    }

    validateUserCredentials(): boolean {
        if (this.userLoginForm.value.userName != '' && this.userLoginForm.value.password != '') {
            return true;
        } else {
            this.alertPopupCheck(true, false);
            this._alertService.error('Please enter both username and password.');
            return false;
        }
    }

    validateNewUserDetail(): boolean {
        if (this.userRegisterForm.value.name != '' && this.userRegisterForm.value.userName != '' && this.userRegisterForm.value.email != ''
            && this.userRegisterForm.value.password != '' && this.userRegisterForm.value.birthDate != '' && this.userRegisterForm.value.gender != '') {
            if ((<HTMLInputElement>document.getElementById("registerRule")).checked) {
                return true;
            } else {
                this.alertPopupCheck(false, true);
                this._alertService.error('Please check terms and conditions.');
                return false;
            }
        } else {
            this.alertPopupCheck(false, true);
            this._alertService.error('Please enter all details.');
            return false;
        }
    }

    alertPopupCheck(loginDivBox, registerDivBox) {
        this.loginDivBox = loginDivBox;
        this.registerDivBox = registerDivBox;
    }
    ngOnInit() {
    }
}
