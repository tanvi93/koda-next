import { TestBed, inject } from '@angular/core/testing';

import { IfElseBlockService } from './if-else-block.service';

describe('IfElseBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IfElseBlockService]
    });
  });

  it('should be created', inject([IfElseBlockService], (service: IfElseBlockService) => {
    expect(service).toBeTruthy();
  }));
});
