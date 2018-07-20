import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDropComponent } from './step-drop.component';

describe('StepDropComponent', () => {
  let component: StepDropComponent;
  let fixture: ComponentFixture<StepDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
