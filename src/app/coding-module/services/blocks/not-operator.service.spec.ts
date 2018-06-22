import { TestBed, inject } from '@angular/core/testing';

import { NotOperatorService } from './not-operator.service';

describe('NotOperatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotOperatorService]
    });
  });

  it('should be created', inject([NotOperatorService], (service: NotOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
