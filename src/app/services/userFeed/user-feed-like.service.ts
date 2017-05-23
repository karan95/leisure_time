import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppUserService } from '../../services/app-user/app-user.service';

@Injectable()
export class UserFeedLikeService {

  constructor(private http: Http, private _appUserService:AppUserService) { }
  
  like(userFeedLike) {
    let headers = new Headers();
    let currentUser = this._appUserService.gerUser();
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('uid', currentUser.userId);
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers,
      search: urlSearchParams,
      withCredentials: true
    });
    return this.http.post('http://localhost:3000/feeds/like', userFeedLike, options)
      .toPromise()
      .then(res => {
        if(res.status == 201) {
          return res.json();
        }
      })
  }
}
