import { TestBed, inject } from '@angular/core/testing';

import { HideShowVarBlockService } from './hide-show-var-block.service';

describe('HideShowVarBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideShowVarBlockService]
    });
  });

  it('should be created', inject([HideShowVarBlockService], (service: HideShowVarBlockService) => {
    expect(service).toBeTruthy();
  }));
});
