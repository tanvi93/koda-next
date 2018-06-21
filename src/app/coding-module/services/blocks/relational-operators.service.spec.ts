import { TestBed, inject } from '@angular/core/testing';

import { RelationalOperatorsService } from './relational-operators.service';

describe('RelationalOperatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelationalOperatorsService]
    });
  });

  it('should be created', inject([RelationalOperatorsService], (service: RelationalOperatorsService) => {
    expect(service).toBeTruthy();
  }));
});
