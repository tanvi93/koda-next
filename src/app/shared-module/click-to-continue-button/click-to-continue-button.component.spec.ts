import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickToContinueButtonComponent } from './click-to-continue-button.component';

describe('ClickToContinueButtonComponent', () => {
  let component: ClickToContinueButtonComponent;
  let fixture: ComponentFixture<ClickToContinueButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToContinueButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToContinueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
