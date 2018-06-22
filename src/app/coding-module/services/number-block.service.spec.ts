import { TestBed, inject } from '@angular/core/testing';

import { NumberBlockService } from './number-block.service';

describe('NumberBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberBlockService]
    });
  });

  it('should be created', inject([NumberBlockService], (service: NumberBlockService) => {
    expect(service).toBeTruthy();
  }));
});
