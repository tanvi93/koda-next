import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoStepsComponent } from './algo-steps.component';

describe('AlgoStepsComponent', () => {
  let component: AlgoStepsComponent;
  let fixture: ComponentFixture<AlgoStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
