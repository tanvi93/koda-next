import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHintModalComponent } from './general-hint-modal.component';

describe('GeneralHintModalComponent', () => {
  let component: GeneralHintModalComponent;
  let fixture: ComponentFixture<GeneralHintModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralHintModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralHintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
