import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  openDropdown():void {
    if (this.visible == false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  ngOnInit() {
  }

}
