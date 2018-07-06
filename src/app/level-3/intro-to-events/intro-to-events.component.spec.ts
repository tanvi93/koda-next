import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToEventsComponent } from './intro-to-events.component';

describe('IntroToEventsComponent', () => {
  let component: IntroToEventsComponent;
  let fixture: ComponentFixture<IntroToEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
