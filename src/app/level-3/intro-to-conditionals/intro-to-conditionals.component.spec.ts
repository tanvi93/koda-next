import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToConditionalsComponent } from './intro-to-conditionals.component';

describe('IntroToConditionalsComponent', () => {
  let component: IntroToConditionalsComponent;
  let fixture: ComponentFixture<IntroToConditionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToConditionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToConditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
