import { TestBed, inject } from '@angular/core/testing';

import { MoveCapToLeftendService } from './move-cap-to-leftend.service';

describe('MoveCapToLeftendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveCapToLeftendService]
    });
  });

  it('should be created', inject([MoveCapToLeftendService], (service: MoveCapToLeftendService) => {
    expect(service).toBeTruthy();
  }));
});
