import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsOutputSectionComponent } from './output-section.component';

describe('MarsOutputSectionComponent', () => {
  let component: MarsOutputSectionComponent;
  let fixture: ComponentFixture<MarsOutputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsOutputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsOutputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
