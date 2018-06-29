import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedElementsZoneComponent } from './sorted-elements-zone.component';

describe('SortedElementsZoneComponent', () => {
  let component: SortedElementsZoneComponent;
  let fixture: ComponentFixture<SortedElementsZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedElementsZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedElementsZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
