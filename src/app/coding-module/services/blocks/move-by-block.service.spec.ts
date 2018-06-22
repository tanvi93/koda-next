import { TestBed, inject } from '@angular/core/testing';

import { MoveByBlockService } from './move-by-block.service';

describe('MoveByBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveByBlockService]
    });
  });

  it('should be created', inject([MoveByBlockService], (service: MoveByBlockService) => {
    expect(service).toBeTruthy();
  }));
});
