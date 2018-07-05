import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragStepComponent } from './drag-step.component';

describe('DragStepComponent', () => {
  let component: DragStepComponent;
  let fixture: ComponentFixture<DragStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
