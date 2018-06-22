import { TestBed, inject } from '@angular/core/testing';

import { KeypressEventService } from './keypress-event.service';

describe('KeypressEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeypressEventService]
    });
  });

  it('should be created', inject([KeypressEventService], (service: KeypressEventService) => {
    expect(service).toBeTruthy();
  }));
});
