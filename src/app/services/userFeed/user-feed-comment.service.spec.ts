/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedCommentService } from './user-feed-comment.service';

describe('UserFeedCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedCommentService]
    });
  });

  it('should ...', inject([UserFeedCommentService], (service: UserFeedCommentService) => {
    expect(service).toBeTruthy();
  }));
});
