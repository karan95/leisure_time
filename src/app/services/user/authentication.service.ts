import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppUserService } from '../app-user/app-user.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private _appUserService: AppUserService) { }

    login(userLogin: any) {
        return this.http.post('/authenticate', JSON.stringify(userLogin))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this._appUserService.setUser('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        this._appUserService.removeUser('currentUser');
    }
}