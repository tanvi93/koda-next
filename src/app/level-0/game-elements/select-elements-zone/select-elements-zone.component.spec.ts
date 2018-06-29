import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElementsZoneComponent } from './select-elements-zone.component';

describe('SelectElementsZoneComponent', () => {
  let component: SelectElementsZoneComponent;
  let fixture: ComponentFixture<SelectElementsZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectElementsZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectElementsZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
