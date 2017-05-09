import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserFeedLikeService {

  constructor(private http: Http) { }
  
  like(userFeedLike) {
    let headers = new Headers();
        let urlSearchParams = new URLSearchParams();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userFeedLike,
            search: urlSearchParams,
            withCredentials: true
        });
        return this.http.request('http://localhost:3000/userAuth', options)
            .map((response: Response) => {
                if (response.json() && response.status == 200) {
                }
                return response.json();
            });
  }
}
