import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitiveCodeComponent } from './repetitive-code.component';

describe('RepetitiveCodeComponent', () => {
  let component: RepetitiveCodeComponent;
  let fixture: ComponentFixture<RepetitiveCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepetitiveCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitiveCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
