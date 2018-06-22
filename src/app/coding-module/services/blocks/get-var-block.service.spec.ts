import { TestBed, inject } from '@angular/core/testing';

import { GetVarBlockService } from './get-var-block.service';

describe('GetVarBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetVarBlockService]
    });
  });

  it('should be created', inject([GetVarBlockService], (service: GetVarBlockService) => {
    expect(service).toBeTruthy();
  }));
});
