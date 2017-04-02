import { Injectable } from '@angular/core';

@Injectable()
export class AppUserService {
  public userInfo: Storage;

  constructor() { }

  setUser(currentUser: string, userData:any) {
    this.userInfo.setItem(currentUser, userData);
  }

  gerUser() {
    return this.userInfo.getItem('currentUser');
  }

  removeUser(currentUser: string) {
    this.userInfo.removeItem(currentUser);
  }

}
