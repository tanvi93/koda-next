import { TestBed, inject } from '@angular/core/testing';

import { KodaInterpreterService } from './koda-interpreter.service';

describe('KodaInterpreterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KodaInterpreterService]
    });
  });

  it('should be created', inject([KodaInterpreterService], (service: KodaInterpreterService) => {
    expect(service).toBeTruthy();
  }));
});
