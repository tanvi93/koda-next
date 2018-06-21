import { TestBed, inject } from '@angular/core/testing';

import { TouchEventService } from './touch-event.service';

describe('TouchEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TouchEventService]
    });
  });

  it('should be created', inject([TouchEventService], (service: TouchEventService) => {
    expect(service).toBeTruthy();
  }));
});
