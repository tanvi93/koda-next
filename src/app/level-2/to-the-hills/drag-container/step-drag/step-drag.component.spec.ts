import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDragComponent } from './step-drag.component';

describe('StepDragComponent', () => {
  let component: StepDragComponent;
  let fixture: ComponentFixture<StepDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
