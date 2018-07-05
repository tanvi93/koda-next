import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropStepComponent } from './drop-step.component';

describe('DropStepComponent', () => {
  let component: DropStepComponent;
  let fixture: ComponentFixture<DropStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
