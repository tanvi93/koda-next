import { TestBed, inject } from '@angular/core/testing';

import { MouseClickEventService } from './mouse-click-event.service';

describe('MouseClickEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouseClickEventService]
    });
  });

  it('should be created', inject([MouseClickEventService], (service: MouseClickEventService) => {
    expect(service).toBeTruthy();
  }));
});
