import { TestBed, inject } from '@angular/core/testing';

import { ConditionalOperatorsService } from './conditional-operators.service';

describe('ConditionalOperatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionalOperatorsService]
    });
  });

  it('should be created', inject([ConditionalOperatorsService], (service: ConditionalOperatorsService) => {
    expect(service).toBeTruthy();
  }));
});
