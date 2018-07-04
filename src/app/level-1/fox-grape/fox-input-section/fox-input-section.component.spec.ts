import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxInputSectionComponent } from './fox-input-section.component';

describe('FoxInputSectionComponent', () => {
  let component: FoxInputSectionComponent;
  let fixture: ComponentFixture<FoxInputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxInputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
