import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDisplaySectionComponent } from './character-display-section.component';

describe('CharacterDisplaySectionComponent', () => {
  let component: CharacterDisplaySectionComponent;
  let fixture: ComponentFixture<CharacterDisplaySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDisplaySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDisplaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
