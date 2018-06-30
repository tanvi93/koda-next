import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPositioningComponent } from './character-positioning.component';

describe('CharacterPositioningComponent', () => {
  let component: CharacterPositioningComponent;
  let fixture: ComponentFixture<CharacterPositioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPositioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
