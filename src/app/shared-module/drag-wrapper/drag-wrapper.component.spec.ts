import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragWrapperComponent } from './drag-wrapper.component';

describe('DragWrapperComponent', () => {
  let component: DragWrapperComponent;
  let fixture: ComponentFixture<DragWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
