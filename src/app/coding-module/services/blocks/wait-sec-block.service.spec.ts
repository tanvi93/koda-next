import { TestBed, inject } from '@angular/core/testing';

import { WaitSecBlockService } from './wait-sec-block.service';

describe('WaitSecBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaitSecBlockService]
    });
  });

  it('should be created', inject([WaitSecBlockService], (service: WaitSecBlockService) => {
    expect(service).toBeTruthy();
  }));
});
