import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public visible = false;
  values = [{ value: '1', label: 'Profile', link:'userProfile'},
  { value: '2', label: 'Settings', link:'userProfile'},
  { value: '3', label: 'Help', link:'userProfile'},
  { label: 'Logout', value: '4', link:'logout'}];
  constructor(private router:Router) { }

  removeNotification():void {
    if (this.visible == false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  changeRoute(url) {
     this.router.navigateByUrl('home/parking', { skipLocationChange: true });
     setTimeout(()=>this.router.navigate([url]));
  }

   ngOnInit() {}

}
