import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureActivitySectionComponent } from './treasure-activity-section.component';

describe('TreasureActivitySectionComponent', () => {
  let component: TreasureActivitySectionComponent;
  let fixture: ComponentFixture<TreasureActivitySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasureActivitySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasureActivitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
