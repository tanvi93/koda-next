import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxOutputSectionComponent } from './fox-output-section.component';

describe('FoxOutputSectionComponent', () => {
  let component: FoxOutputSectionComponent;
  let fixture: ComponentFixture<FoxOutputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxOutputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxOutputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
