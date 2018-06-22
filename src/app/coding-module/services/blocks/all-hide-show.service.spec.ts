import { TestBed, inject } from '@angular/core/testing';

import { AllHideShowService } from './all-hide-show.service';

describe('AllHideShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllHideShowService]
    });
  });

  it('should be created', inject([AllHideShowService], (service: AllHideShowService) => {
    expect(service).toBeTruthy();
  }));
});
