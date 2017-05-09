import { Component, OnInit } from '@angular/core';
import { LtFeedsService, UserFeedData} from './lt-feeds.service';
import { Subscription } from 'rxjs/Subscription';
import { LtFeedsHttpService } from './lt-feeds-http.service';
import { AppUserService } from '../../services/app-user/app-user.service';
import { UserFeedLikeService } from '../../services/userFeed/user-feed-like.service';

@Component({
  selector: 'app-lt-feeds',
  templateUrl: './lt-feeds.component.html',
  styleUrls: ['./lt-feeds.component.css']
})
export class LtFeedsComponent implements OnInit {
  userFeedSubscription: Subscription;
  userFeedData: Array<UserFeedData>;
  feedCommentDiv: boolean = false;
  constructor(
    private _ltFeedsService: LtFeedsService,
    private _ltFeedsHttpService:LtFeedsHttpService,
    private _appUserService:AppUserService,
    private _userFeedLikeService: UserFeedLikeService
  ) { }

  ngOnInit() {
    this.userFeedData = [];
    this._ltFeedsHttpService.getFeeds().subscribe(
      (feeds) => {
        this.userFeedData = feeds;
      } 
    );
    this.userFeedSubscription = this._ltFeedsService.userFeedInfo$.subscribe((data) => { this.userFeedData.push(data); }); // observe headInfo object
  }

  displayFeedComment() {
    if (this.feedCommentDiv == false) {
      this.feedCommentDiv = true;
    } else {
      this.feedCommentDiv = false;
    }
  }

  reviewTextSize(reviewText:string) {
    if (reviewText) {
      if (reviewText.length < 100) {
        return true;
      } else {
        return false;
      }
    }
  }

  feedLike(userFeed) {
    let userFeedLikeData = {'feedId':userFeed.feedId};
    this._userFeedLikeService.like(JSON.stringify(userFeedLikeData));
    console.log(userFeed.feedId);
  }
}
