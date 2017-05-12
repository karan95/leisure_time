/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedRecommendService } from './user-feed-recommend.service';

describe('UserFeedRecommendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedRecommendService]
    });
  });

  it('should ...', inject([UserFeedRecommendService], (service: UserFeedRecommendService) => {
    expect(service).toBeTruthy();
  }));
});
