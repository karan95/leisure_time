import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams, RequestMethod } from '@angular/http';

import { User } from './user';
import { AppUserService } from '../app-user/app-user.service';

@Injectable()
export class UserService {
    public currentUser: any;
    public headers: Headers;
    public urlSearchParams: URLSearchParams;
    public options: RequestOptions;
    constructor(private http: Http, private _appUserService: AppUserService) {
        this.currentUser = this._appUserService.gerUser();
        this.headers = new Headers();
        this.urlSearchParams = new URLSearchParams();   
    }

    getAll() {
        return this.http.get('/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: string) {
        this.urlSearchParams.append('uid', this.currentUser.userId);
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.options = new RequestOptions({ headers: this.headers, search: this.urlSearchParams, withCredentials: true });
        return this.http.get('http://localhost:3000/user/' + id, this.options).map((response: Response) => response.json());
    }

    create(userDetail: any) {
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({
            method: RequestMethod.Post,
            headers: this.headers,
            body: userDetail,
            withCredentials: true
        });
        return this.http.request('http://localhost:3000/addUserInfo', this.options)
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