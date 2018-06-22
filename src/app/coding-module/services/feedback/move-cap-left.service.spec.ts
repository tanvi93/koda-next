import { TestBed, inject } from '@angular/core/testing';

import { MoveCapLeftService } from './move-cap-left.service';

describe('MoveCapLeftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveCapLeftService]
    });
  });

  it('should be created', inject([MoveCapLeftService], (service: MoveCapLeftService) => {
    expect(service).toBeTruthy();
  }));
});
