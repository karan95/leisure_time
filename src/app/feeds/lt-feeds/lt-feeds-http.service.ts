import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppUserService } from '../../services/app-user/app-user.service';

@Injectable()
export class LtFeedsHttpService {
  userFeeds:any = {};
  constructor(private http: Http, private _appUserService: AppUserService) {}
  public getFeeds() {
    let currentUser = this._appUserService.gerUser();
    let uid = currentUser.userId;
    let headers = new Headers();
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('uid', currentUser.userId);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, search: urlSearchParams, withCredentials: true });
    return this.http.get('http://localhost:3000/feeds', options)
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } 
}
