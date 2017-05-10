/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedShareService } from './user-feed-share.service';

describe('UserFeedShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedShareService]
    });
  });

  it('should ...', inject([UserFeedShareService], (service: UserFeedShareService) => {
    expect(service).toBeTruthy();
  }));
});
