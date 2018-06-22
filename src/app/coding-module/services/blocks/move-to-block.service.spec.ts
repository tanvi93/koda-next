import { TestBed, inject } from '@angular/core/testing';

import { MoveToBlockService } from './move-to-block.service';

describe('MoveToBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveToBlockService]
    });
  });

  it('should be created', inject([MoveToBlockService], (service: MoveToBlockService) => {
    expect(service).toBeTruthy();
  }));
});
