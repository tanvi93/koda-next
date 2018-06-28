import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReletivePositionLearningComponent } from './reletive-position-learning.component';

describe('ReletivePositionLearningComponent', () => {
  let component: ReletivePositionLearningComponent;
  let fixture: ComponentFixture<ReletivePositionLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReletivePositionLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReletivePositionLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
