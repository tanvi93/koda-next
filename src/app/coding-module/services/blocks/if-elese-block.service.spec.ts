import { TestBed, inject } from '@angular/core/testing';

import { IfEleseBlockService } from './if-elese-block.service';

describe('IfEleseBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IfEleseBlockService]
    });
  });

  it('should be created', inject([IfEleseBlockService], (service: IfEleseBlockService) => {
    expect(service).toBeTruthy();
  }));
});
