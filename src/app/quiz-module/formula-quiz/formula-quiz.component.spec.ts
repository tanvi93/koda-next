import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaQuizComponent } from './formula-quiz.component';

describe('FormulaQuizComponent', () => {
  let component: FormulaQuizComponent;
  let fixture: ComponentFixture<FormulaQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
