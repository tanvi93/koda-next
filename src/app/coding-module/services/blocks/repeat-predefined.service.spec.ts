import { TestBed, inject } from '@angular/core/testing';

import { RepeatPredefinedService } from './repeat-predefined.service';

describe('RepeatPredefinedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepeatPredefinedService]
    });
  });

  it('should be created', inject([RepeatPredefinedService], (service: RepeatPredefinedService) => {
    expect(service).toBeTruthy();
  }));
});
