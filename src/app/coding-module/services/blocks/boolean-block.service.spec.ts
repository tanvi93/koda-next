import { TestBed, inject } from '@angular/core/testing';

import { BooleanBlockService } from './boolean-block.service';

describe('BooleanBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooleanBlockService]
    });
  });

  it('should be created', inject([BooleanBlockService], (service: BooleanBlockService) => {
    expect(service).toBeTruthy();
  }));
});
