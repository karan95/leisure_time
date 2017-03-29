import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LtFeedsHttpService } from './lt-feeds-http.service';

export interface UserFeedData {
  _id?:string;
  category?: string;
  name?: string;
  review?: string;
  rate?: number;
  imageUrl?: string;
}

@Injectable()
export class LtFeedsService {
  userFeedInfo$: Observable<UserFeedData>;
  private _userFeedInfo: BehaviorSubject<UserFeedData>;
  private dataStore: UserFeedData;
  constructor() {
    this.dataStore = {};
    this._userFeedInfo = <BehaviorSubject<UserFeedData>>new BehaviorSubject([]);
    this.userFeedInfo$ = this._userFeedInfo.asObservable();
  }
  setUserFeedData(data: any) {
    this.dataStore = data;
    this._userFeedInfo.next(Object.assign({}, this.dataStore));
  }
}
