import { TestBed, inject } from '@angular/core/testing';

import { LogicalOperatorsService } from './logical-operators.service';

describe('LogicalOperatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogicalOperatorsService]
    });
  });

  it('should be created', inject([LogicalOperatorsService], (service: LogicalOperatorsService) => {
    expect(service).toBeTruthy();
  }));
});
