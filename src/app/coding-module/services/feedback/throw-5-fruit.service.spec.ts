import { TestBed, inject } from '@angular/core/testing';

import { Throw5FruitService } from './throw-5-fruit.service';

describe('Throw5FruitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Throw5FruitService]
    });
  });

  it('should be created', inject([Throw5FruitService], (service: Throw5FruitService) => {
    expect(service).toBeTruthy();
  }));
});
