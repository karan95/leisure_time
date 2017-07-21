import { TestBed, inject } from '@angular/core/testing';

import { RefreshComponentService } from './refresh-component.service';

describe('RefreshComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshComponentService]
    });
  });

  it('should be created', inject([RefreshComponentService], (service: RefreshComponentService) => {
    expect(service).toBeTruthy();
  }));
});
