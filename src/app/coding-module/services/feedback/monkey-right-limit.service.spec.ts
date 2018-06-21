import { TestBed, inject } from '@angular/core/testing';

import { MonkeyRightLimitService } from './monkey-right-limit.service';

describe('MonkeyRightLimitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonkeyRightLimitService]
    });
  });

  it('should be created', inject([MonkeyRightLimitService], (service: MonkeyRightLimitService) => {
    expect(service).toBeTruthy();
  }));
});
