import { TestBed, inject } from '@angular/core/testing';

import { ChangeVarBlockService } from './change-var-block.service';

describe('ChangeVarBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeVarBlockService]
    });
  });

  it('should be created', inject([ChangeVarBlockService], (service: ChangeVarBlockService) => {
    expect(service).toBeTruthy();
  }));
});
