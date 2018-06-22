import { TestBed, inject } from '@angular/core/testing';

import { HideShowButtonService } from './hide-show-button.service';

describe('HideShowButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideShowButtonService]
    });
  });

  it('should be created', inject([HideShowButtonService], (service: HideShowButtonService) => {
    expect(service).toBeTruthy();
  }));
});
