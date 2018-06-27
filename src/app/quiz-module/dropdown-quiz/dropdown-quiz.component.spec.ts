import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownQuizComponent } from './dropdown-quiz.component';

describe('DropdownQuizComponent', () => {
  let component: DropdownQuizComponent;
  let fixture: ComponentFixture<DropdownQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
