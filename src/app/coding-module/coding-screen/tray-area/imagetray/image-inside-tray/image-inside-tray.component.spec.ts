import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInsideTrayComponent } from './image-inside-tray.component';

describe('ImageInsideTrayComponent', () => {
  let component: ImageInsideTrayComponent;
  let fixture: ComponentFixture<ImageInsideTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInsideTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageInsideTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
