import { TestBed, inject } from '@angular/core/testing';

import { ChangeLookBlockService } from './change-look-block.service';

describe('ChangeLookBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLookBlockService]
    });
  });

  it('should be created', inject([ChangeLookBlockService], (service: ChangeLookBlockService) => {
    expect(service).toBeTruthy();
  }));
});
