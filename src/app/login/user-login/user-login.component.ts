import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/user/authentication.service';
import { NotificationService } from '../../services/notification/notification.service';

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
        private _userService: UserService,
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
            'name': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24), this.stringValidator]],
            'userName': ['', [Validators.required, Validators.minLength(4)]],
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required, Validators.minLength(8)]],
            'birthDate': ['', [Validators.required]],
            'gender':['', [Validators.required]],
            'ltTerms':[false, [Validators.required]]
        });
        this.userRegisterForm.valueChanges
          .subscribe(data => this.onRegisterValueChanged(data));
    }

    login() {
        if (this.userLoginForm.valid) {
            let userLoginData = JSON.stringify(this.userLoginForm.value);
            this._authenticationService.login(userLoginData)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/');
                },
                error => {
                    this._notificationService.showErrorNotification('The username or password is incorrect.');
            });
        } else {
            this._notificationService.showErrorNotification('Please enter both username and password.');   
        }
    }
    
    register() {
        this.onRegisterValueChanged();
        if (this.userRegisterForm.valid) {  
            let userData = JSON.stringify(this.userRegisterForm.value);
            this._userService.create(userData)
            .subscribe(
                data => {
                    this.userRegisterForm.reset();
                    this._notificationService.showSuccessNotification('User Registration successful');
                },
                error => {
                    this._notificationService.showErrorNotification('User registration unsuccessful.');
                });
        } else {
            this._notificationService.showErrorNotification('Please enter all details.'); 
        }
    }

    onRegisterValueChanged(data?: any) {
        if (!this.userRegisterForm) { return; }
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
        'gender':'',
        'ltTerms':''
    };

    registerValidationMessages = {
        'name': {
            'required':  'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
        },
        'userName': {
            'required': 'Username is required.',
            'minlength': 'Username must be at least 4 characters long.'
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
        'ltTerms': {
            'required': 'Please check terms and conditions.'   
        }        
    };

    public NoWhitespaceValidator(control: FormControl) {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
    }

    public stringValidator(control: FormControl) {
    }

}
