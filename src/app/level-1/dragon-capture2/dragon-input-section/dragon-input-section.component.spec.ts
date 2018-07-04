import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonInputSectionComponent } from './dragon-input-section.component';

describe('DragonInputSectionComponent', () => {
  let component: DragonInputSectionComponent;
  let fixture: ComponentFixture<DragonInputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonInputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
