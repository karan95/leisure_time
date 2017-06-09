/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedHideService } from './user-feed-hide.service';

describe('UserFeedHideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedHideService]
    });
  });

  it('should ...', inject([UserFeedHideService], (service: UserFeedHideService) => {
    expect(service).toBeTruthy();
  }));
});
