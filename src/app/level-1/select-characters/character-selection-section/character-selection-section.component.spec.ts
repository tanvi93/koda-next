import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSelectionSectionComponent } from './character-selection-section.component';

describe('CharacterSelectionSectionComponent', () => {
  let component: CharacterSelectionSectionComponent;
  let fixture: ComponentFixture<CharacterSelectionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSelectionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSelectionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
