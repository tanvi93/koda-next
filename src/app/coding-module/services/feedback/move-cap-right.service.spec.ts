import { TestBed, inject } from '@angular/core/testing';

import { MoveCapRightService } from './move-cap-right.service';

describe('MoveCapRightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveCapRightService]
    });
  });

  it('should be created', inject([MoveCapRightService], (service: MoveCapRightService) => {
    expect(service).toBeTruthy();
  }));
});
