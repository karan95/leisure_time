import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

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
        return this.http.post('/user', userDetail, this.jwt()).map((response: Response) => response.json());
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