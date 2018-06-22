import { TestBed, inject } from '@angular/core/testing';

import { RandomPositionService } from './random-position.service';

describe('RandomPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomPositionService]
    });
  });

  it('should be created', inject([RandomPositionService], (service: RandomPositionService) => {
    expect(service).toBeTruthy();
  }));
});
