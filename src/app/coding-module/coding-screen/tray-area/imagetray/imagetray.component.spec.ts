import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetrayComponent } from './imagetray.component';

describe('ImagetrayComponent', () => {
  let component: ImagetrayComponent;
  let fixture: ComponentFixture<ImagetrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagetrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagetrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
