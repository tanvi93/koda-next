import { TestBed, inject } from '@angular/core/testing';

import { RandomNumberBlockService } from './random-number-block.service';

describe('RandomNumberBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomNumberBlockService]
    });
  });

  it('should be created', inject([RandomNumberBlockService], (service: RandomNumberBlockService) => {
    expect(service).toBeTruthy();
  }));
});
