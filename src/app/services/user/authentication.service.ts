import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppUserService } from '../app-user/app-user.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private _appUserService: AppUserService) { }

    login(userLogin: any) {
        let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userLogin,
            search: urlSearchParams,
            withCredentials: true
        });
        return this.http.request('http://localhost:3000/userAuth', options)
            .map((response: Response) => {
                let userResData = response.json();
                if (userResData && response.status == 200) {
                    console.log('inside cond');
                    this._appUserService.setUser('currentUser', user);
                }
                // login successful if there's a jwt token in the response
                /** if (user && response.status == 200) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this._appUserService.setUser('currentUser', JSON.stringify(user));
                } **/
                return response.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        console.log("user removed");
        // this._appUserService.removeUser('currentUser');
    }
}