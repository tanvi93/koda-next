import { TestBed, inject } from '@angular/core/testing';

import { PackagingMilkCode1Service } from './packaging-milk-code1.service';

describe('PackagingMilkCode1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagingMilkCode1Service]
    });
  });

  it('should be created', inject([PackagingMilkCode1Service], (service: PackagingMilkCode1Service) => {
    expect(service).toBeTruthy();
  }));
});
