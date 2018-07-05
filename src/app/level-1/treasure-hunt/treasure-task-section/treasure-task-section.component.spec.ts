import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureTaskSectionComponent } from './treasure-task-section.component';

describe('TreasureTaskSectionComponent', () => {
  let component: TreasureTaskSectionComponent;
  let fixture: ComponentFixture<TreasureTaskSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasureTaskSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasureTaskSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
