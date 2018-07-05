import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCapture2Component } from './dragon-capture2.component';

describe('DragonCapture2Component', () => {
  let component: DragonCapture2Component;
  let fixture: ComponentFixture<DragonCapture2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCapture2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCapture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
