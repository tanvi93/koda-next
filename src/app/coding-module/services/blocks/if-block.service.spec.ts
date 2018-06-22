import { TestBed, inject } from '@angular/core/testing';

import { IfBlockService } from './if-block.service';

describe('IfBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IfBlockService]
    });
  });

  it('should be created', inject([IfBlockService], (service: IfBlockService) => {
    expect(service).toBeTruthy();
  }));
});
