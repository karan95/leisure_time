import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
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
        let options = new RequestOptions({ headers: headers, search: urlSearchParams, withCredentials: true });
        return this.http.post('http://localhost:3000/userAuth', userLogin, options)
            .map((response: Response) => {debugger;
                // login successful if there's a jwt token in the response
                let user = response.json();
                let headers = response.headers;
                var cookie = headers.getAll('access_token');
                console.log(response);
                /** if (user && response.status == 200) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this._appUserService.setUser('currentUser', JSON.stringify(user));
                } **/
                return response.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        this._appUserService.removeUser('currentUser');
    }
}