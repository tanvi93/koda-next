import { TestBed, inject } from '@angular/core/testing';

import { RepeatUntillBlockService } from './repeat-untill-block.service';

describe('RepeatUntillBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepeatUntillBlockService]
    });
  });

  it('should be created', inject([RepeatUntillBlockService], (service: RepeatUntillBlockService) => {
    expect(service).toBeTruthy();
  }));
});
