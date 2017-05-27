import { Component, OnInit, Input } from '@angular/core';
import { UserFeedLikeService } from '../../services/userFeed/user-feed-like.service';

@Component({
  selector: 'app-user-feeds',
  templateUrl: './user-feeds.component.html',
  styleUrls: ['./user-feeds.component.css']
})
export class UserFeedsComponent implements OnInit {
  feedCommentDiv: boolean = false;
  @Input()
  userFeeds: Array<any>;
  constructor(private _userFeedLikeService: UserFeedLikeService) { }
  ngOnInit() {
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

  feedLike(userFeed, event) {
    // For feed like, on each click send request and update like data
    let userFeedLikeData = {'feedId':userFeed.feedId, 'liked':true};
    if (event.currentTarget.style.color != 'rgb(20, 106, 179)') {
      event.currentTarget.style.color = 'rgb(20, 106, 179)';
    } else {
      event.currentTarget.style.color = 'rgb(51, 51, 51)';
      userFeedLikeData.liked = false;
    }
    this._userFeedLikeService.like(JSON.stringify(userFeedLikeData));
  }

}
