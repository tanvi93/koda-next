import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonOutputSectionComponent } from './dragon-output-section.component';

describe('DragonOutputSectionComponent', () => {
  let component: DragonOutputSectionComponent;
  let fixture: ComponentFixture<DragonOutputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonOutputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonOutputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
