import { TestBed, inject } from '@angular/core/testing';

import { FindMonkeyRangeService } from './find-monkey-range.service';

describe('FindMonkeyRangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindMonkeyRangeService]
    });
  });

  it('should be created', inject([FindMonkeyRangeService], (service: FindMonkeyRangeService) => {
    expect(service).toBeTruthy();
  }));
});
