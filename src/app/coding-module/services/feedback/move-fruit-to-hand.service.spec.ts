import { TestBed, inject } from '@angular/core/testing';

import { MoveFruitToHandService } from './move-fruit-to-hand.service';

describe('MoveFruitToHandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveFruitToHandService]
    });
  });

  it('should be created', inject([MoveFruitToHandService], (service: MoveFruitToHandService) => {
    expect(service).toBeTruthy();
  }));
});
