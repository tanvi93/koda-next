import { TestBed, inject } from '@angular/core/testing';

import { VariableBlockService } from './variable-block.service';

describe('VariableBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VariableBlockService]
    });
  });

  it('should be created', inject([VariableBlockService], (service: VariableBlockService) => {
    expect(service).toBeTruthy();
  }));
});
