import { Injectable } from '@angular/core';

@Injectable()
export class AppUserService {
  constructor() { }

  setUser(userData:any) {
    localStorage.setItem('currentUser', userData);
  }

  gerUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  removeUser() {
    localStorage.removeItem('currentUser');
  }

}
