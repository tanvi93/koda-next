import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaActivityComponent } from './captcha-activity.component';

describe('CaptchaActivityComponent', () => {
  let component: CaptchaActivityComponent;
  let fixture: ComponentFixture<CaptchaActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptchaActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptchaActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
