import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/user/authentication.service';

@Component({
  template: ``
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private _authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this._authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

}
