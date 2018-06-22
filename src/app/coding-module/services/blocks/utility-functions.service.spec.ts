import { TestBed, inject } from '@angular/core/testing';

import { UtilityFunctionsService } from './utility-functions.service';

describe('UtilityFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityFunctionsService]
    });
  });

  it('should be created', inject([UtilityFunctionsService], (service: UtilityFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
