import { TestBed, inject } from '@angular/core/testing';

import { SetVarBlockService } from './set-var-block.service';

describe('SetVarBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetVarBlockService]
    });
  });

  it('should be created', inject([SetVarBlockService], (service: SetVarBlockService) => {
    expect(service).toBeTruthy();
  }));
});
