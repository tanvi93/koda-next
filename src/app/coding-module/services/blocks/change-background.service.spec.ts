import { TestBed, inject } from '@angular/core/testing';

import { ChangeBackgroundService } from './change-background.service';

describe('ChangeBackgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeBackgroundService]
    });
  });

  it('should be created', inject([ChangeBackgroundService], (service: ChangeBackgroundService) => {
    expect(service).toBeTruthy();
  }));
});
