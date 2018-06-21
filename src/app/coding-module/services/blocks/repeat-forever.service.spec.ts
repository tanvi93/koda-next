import { TestBed, inject } from '@angular/core/testing';

import { RepeatForeverService } from './repeat-forever.service';

describe('RepeatForeverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepeatForeverService]
    });
  });

  it('should be created', inject([RepeatForeverService], (service: RepeatForeverService) => {
    expect(service).toBeTruthy();
  }));
});
