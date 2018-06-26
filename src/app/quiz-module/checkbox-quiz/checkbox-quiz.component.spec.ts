import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxQuizComponent } from './checkbox-quiz.component';

describe('CheckboxQuizComponent', () => {
  let component: CheckboxQuizComponent;
  let fixture: ComponentFixture<CheckboxQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
