import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropWrapperComponent } from './drop-wrapper.component';

describe('DropWrapperComponent', () => {
  let component: DropWrapperComponent;
  let fixture: ComponentFixture<DropWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
