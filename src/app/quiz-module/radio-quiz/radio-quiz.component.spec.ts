import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioQuizComponent } from './radio-quiz.component';

describe('RadioQuizComponent', () => {
  let component: RadioQuizComponent;
  let fixture: ComponentFixture<RadioQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
