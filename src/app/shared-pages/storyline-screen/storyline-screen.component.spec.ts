import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorylineScreenComponent } from './storyline-screen.component';

describe('StorylineScreenComponent', () => {
  let component: StorylineScreenComponent;
  let fixture: ComponentFixture<StorylineScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorylineScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorylineScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
