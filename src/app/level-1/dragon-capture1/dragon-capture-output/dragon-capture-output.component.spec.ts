import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCaptureOutputComponent } from './dragon-capture-output.component';

describe('DragonCaptureOutputComponent', () => {
  let component: DragonCaptureOutputComponent;
  let fixture: ComponentFixture<DragonCaptureOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonCaptureOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonCaptureOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
