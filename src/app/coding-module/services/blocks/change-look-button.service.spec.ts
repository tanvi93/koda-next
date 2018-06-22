import { TestBed, inject } from '@angular/core/testing';

import { ChangeLookButtonService } from './change-look-button.service';

describe('ChangeLookButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLookButtonService]
    });
  });

  it('should be created', inject([ChangeLookButtonService], (service: ChangeLookButtonService) => {
    expect(service).toBeTruthy();
  }));
});
