import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public visible = false;
  values = [{ value: '1', label: 'Support' },
  { value: '2', label: 'About Product' },
  { value: '3', label: 'Wizard' }, { label: 'Console', value: '4' },
  { label: 'Reboot Device', value: '5' }, { label: 'Shutdown Device', value: '6' },
  { label: 'Lock', value: '7' }, { label: 'Logout', value: '8' }];
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
