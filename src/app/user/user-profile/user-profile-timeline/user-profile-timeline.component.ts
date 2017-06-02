import { Component, OnInit } from '@angular/core';
import { UserFeedHttpService } from './../user-feed-http.service';

@Component({
  selector: 'app-user-profile-timeline',
  templateUrl: './user-profile-timeline.component.html',
  styleUrls: ['./user-profile-timeline.component.css']
})
export class UserProfileTimelineComponent implements OnInit {
  userFeeds: Array<any>;
  constructor(private _userFeedHttpService: UserFeedHttpService) { }

  ngOnInit() {
    this.userFeeds = [];
    this._userFeedHttpService.getUserFeeds().subscribe(
       (feeds) => {
        this.userFeeds = feeds;
      } 
    );
  }

}
