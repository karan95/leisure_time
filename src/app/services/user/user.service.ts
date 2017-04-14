import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams, RequestMethod } from '@angular/http';

import { User } from './user';
import { AppUserService } from '../app-user/app-user.service';

@Injectable()
export class UserService {
    constructor(private http: Http, private _appUserService: AppUserService) { }

    getAll() {
        return this.http.get('/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/user/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(userDetail: any) {
        let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userDetail,
            search: urlSearchParams,
            withCredentials: true
        });
        return this.http.request('http://localhost:3000/addUserInfo', options)
            .map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/user/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(this._appUserService.gerUser());
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}