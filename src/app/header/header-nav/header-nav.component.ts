import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppUserService } from '../../services/app-user/app-user.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  currentUser: any;
  public visible = false;
  values = [];
  constructor(private router:Router, private _appUserService:AppUserService) { }

  removeNotification():void {
    if (this.visible == false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  changeRoute(url) {
    this.router.navigateByUrl('/parking', { skipLocationChange: true });
    setTimeout(()=>this.router.navigate([url]));
  }
  
   ngOnInit() {
     this.currentUser = this._appUserService.gerUser();
     this.values = [{ value: '1', label: 'Profile', link: this.currentUser.userProfileLink},
     { value: '2', label: 'Settings', link: this.currentUser.userProfileLink},
     { value: '3', label: 'Help', link: this.currentUser.userProfileLink},
     { label: 'Logout', value: '4', link:'logout'}];
   }

}
