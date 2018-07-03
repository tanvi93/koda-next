import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsInputSectionComponent } from './mars-input-section.component';

describe('MarsInputSectionComponent', () => {
  let component: MarsInputSectionComponent;
  let fixture: ComponentFixture<MarsInputSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsInputSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
