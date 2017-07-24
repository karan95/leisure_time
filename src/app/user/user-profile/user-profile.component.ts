import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { UserService } from  '../../services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user:any;
  public navLinks: Array<any> = [{'link':'timline', 'label':'Timeline', 'class':'fa fa-fw fa-files-o'}, {'link':'info', 'label':'About', 'class':'fa fa-fw fa-files-o'},
                                {'link':'photos', 'label':'Photos', 'class':'fa fa-fw fa-picture-o'}, {'link':'friends', 'label':'Contacts', 'class':'fa fa-fw fa-users'}];
                                
  constructor(private route: ActivatedRoute, private router: Router, private _userService:UserService) { }

  ngOnInit() {
    /*
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this._userService.getById(params.get('userProfileLink')))
    .subscribe((user: any) => this.user = user); */

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
