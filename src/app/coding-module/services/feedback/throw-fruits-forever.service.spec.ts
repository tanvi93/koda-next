import { TestBed, inject } from '@angular/core/testing';

import { ThrowFrutsForeverService } from './throw-fruts-forever.service';

describe('ThrowFrutsForeverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThrowFrutsForeverService]
    });
  });

  it('should be created', inject([ThrowFrutsForeverService], (service: ThrowFrutsForeverService) => {
    expect(service).toBeTruthy();
  }));
});
