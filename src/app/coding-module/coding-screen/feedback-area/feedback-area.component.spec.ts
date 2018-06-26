import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAreaComponent } from './feedback-area.component';

describe('FeedbackAreaComponent', () => {
  let component: FeedbackAreaComponent;
  let fixture: ComponentFixture<FeedbackAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
