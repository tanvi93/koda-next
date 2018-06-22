import { TestBed, inject } from '@angular/core/testing';

import { ChangeXyByService } from './change-xy-by.service';

describe('ChangeXyByService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeXyByService]
    });
  });

  it('should be created', inject([ChangeXyByService], (service: ChangeXyByService) => {
    expect(service).toBeTruthy();
  }));
});
