import { TestBed, inject } from '@angular/core/testing';

import { ArithmeticOperatorsService } from './arithmetic-operators.service';

describe('ArithmeticOperatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArithmeticOperatorsService]
    });
  });

  it('should be created', inject([ArithmeticOperatorsService], (service: ArithmeticOperatorsService) => {
    expect(service).toBeTruthy();
  }));
});
