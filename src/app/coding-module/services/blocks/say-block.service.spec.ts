import { TestBed, inject } from '@angular/core/testing';

import { SayBlockService } from './say-block.service';

describe('SayBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SayBlockService]
    });
  });

  it('should be created', inject([SayBlockService], (service: SayBlockService) => {
    expect(service).toBeTruthy();
  }));
});
