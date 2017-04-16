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
                // store current user data into localstorage using AppUserService
                // another approch would be to store data and jwt token
                if (response.json() && response.status == 200) {
                    this._appUserService.setUser(JSON.stringify(response.json()));
                }
                return response.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        this._appUserService.removeUser();
    }
}