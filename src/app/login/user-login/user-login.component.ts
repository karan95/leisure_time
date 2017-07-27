import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/user/authentication.service';
import { AlertService } from '../../lt-components/alert/alert.service';
import { NotificationService } from '../../services/notification/notification.service';

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
        private _alertService: AlertService,
        private _notificationService: NotificationService
    ) {}

    ngOnInit() {
        this.buildForm();
    }
    
    buildForm(): void {
        this.userLoginForm = this.formBuilder.group({
            'userName': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
        this.userRegisterForm = this.formBuilder.group({
            'name': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
            'userName': ['', [Validators.required, Validators.minLength(4)]],
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required, Validators.minLength(8)]],
            'birthDate': ['', [Validators.required]],
            'gender':['', [Validators.required]]
        });
        this.userRegisterForm.valueChanges
          .subscribe(data => this.onRegisterValueChanged(data));
    }

    login() {
        if (this.validateUserCredentials()) {
            let userLoginData = JSON.stringify(this.userLoginForm.value);
            this._authenticationService.login(userLoginData)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/');
                },
                error => {
                    // this.loginDivBox = true;
                    // this._alertService.error('The username or password is incorrect.');
                    this._notificationService.showErrorNotification('The username or password is incorrect.');
            });
        }
    }
    
    register() {
        let id = 'Agd2vhl';
        let userProfileLink = this.userRegisterForm.value.name;
        // console.log(userProfileLink);
        console.log(this.userRegisterForm.errors);

        if (this.validateNewUserDetail()) {    
            let userData = JSON.stringify(this.userRegisterForm.value);
            this._userService.create(userData)
            .subscribe(
                data => {
                    this.userRegisterForm.reset();
                    // this.alertPopupCheck(false, true);
                    // this._alertService.success('Registration successful', true);
                    this._notificationService.showSuccessNotification('User Registration successful');
                },
                error => {
                    // this.alertPopupCheck(false, true);
                    // this._alertService.error('User registration unsuccessful.');
                    this._notificationService.showErrorNotification('User registration unsuccessful.');
                });
        }
    }

    onRegisterValueChanged(data?: any) {
        const form = this.userRegisterForm;
        for (const field in this.registerFormErrors) {
            // clear previous error message (if any)
            this.registerFormErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.registerValidationMessages[field];
                for (const key in control.errors) {
                    this.registerFormErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    
    registerFormErrors = {
        'name': '',
        'userName': '',
        'email': '',
        'password':'',
        'birthDate':'',
        'gender':''
    };

    registerValidationMessages = {
        'name': {
            'required':  'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
        },
        'userName': {
            'required': 'Username is required.'
        },
        'email': {
            'required': 'Email is required.',
            'email':    'Please enter valid email address.'
        },
        'password': {
            'required': 'Password is required.',
            'minlength': 'Password must be at least 8 characters long.'
        },
        'birthDate': {
            'required': 'Birth Date is required.'
        },
        'gender': {
            'required': 'Gender is required.'
        },
    };

    validateUserCredentials(): boolean {
        if (this.userLoginForm.value.userName != '' && this.userLoginForm.value.password != '') {
            return true;
        } else {
            this._notificationService.showErrorNotification('Please enter both username and password.');
            // this.alertPopupCheck(true, false);
            // this._alertService.error('Please enter both username and password.');
            return false;
        }
    }

    validateNewUserDetail(): boolean {
        if (this.userRegisterForm.value.name != '' && this.userRegisterForm.value.userName != '' && this.userRegisterForm.value.email != ''
            && this.userRegisterForm.value.password != '' && this.userRegisterForm.value.birthDate != '' && this.userRegisterForm.value.gender != '') {
            if ((<HTMLInputElement>document.getElementById("registerRule")).checked) {
                return true;
            } else {
                // this.alertPopupCheck(false, true);
                // this._alertService.error('Please check terms and conditions.');
                this._notificationService.showWarningNotification('Please check terms and conditions.');
                return false;
            }
        } else {
            // this.alertPopupCheck(false, true);
            // this._alertService.error('Please enter all details.');
            this._notificationService.showErrorNotification('Please enter all details.');
            return false;
        }
    }

    alertPopupCheck(loginDivBox, registerDivBox) {
        this.loginDivBox = loginDivBox;
        this.registerDivBox = registerDivBox;
    }

    public NoWhitespaceValidator(control: FormControl) {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
    }

}
