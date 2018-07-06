import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCapture1Component } from './dragon-capture1.component';

describe('DragonCapture1Component', () => {
  let component: DragonCapture1Component;
  let fixture: ComponentFixture<DragonCapture1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCapture1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCapture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
