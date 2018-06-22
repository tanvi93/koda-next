import { TestBed, inject } from '@angular/core/testing';

import { ButtonClickEventService } from './button-click-event.service';

describe('ButtonClickEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonClickEventService]
    });
  });

  it('should be created', inject([ButtonClickEventService], (service: ButtonClickEventService) => {
    expect(service).toBeTruthy();
  }));
});
