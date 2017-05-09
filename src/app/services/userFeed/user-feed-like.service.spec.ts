/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedLikeService } from './user-feed-like.service';

describe('UserFeedLikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedLikeService]
    });
  });

  it('should ...', inject([UserFeedLikeService], (service: UserFeedLikeService) => {
    expect(service).toBeTruthy();
  }));
});
