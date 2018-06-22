import { TestBed, inject } from '@angular/core/testing';

import { ShowHideAllButtonsService } from './show-hide-all-buttons.service';

describe('ShowHideAllButtonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowHideAllButtonsService]
    });
  });

  it('should be created', inject([ShowHideAllButtonsService], (service: ShowHideAllButtonsService) => {
    expect(service).toBeTruthy();
  }));
});
