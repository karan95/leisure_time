/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserFeedHttpService } from './user-feed-http.service';

describe('UserFeedHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFeedHttpService]
    });
  });

  it('should ...', inject([UserFeedHttpService], (service: UserFeedHttpService) => {
    expect(service).toBeTruthy();
  }));
});
