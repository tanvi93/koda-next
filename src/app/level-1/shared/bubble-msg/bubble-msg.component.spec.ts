import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleMsgComponent } from './bubble-msg.component';

describe('BubbleMsgComponent', () => {
  let component: BubbleMsgComponent;
  let fixture: ComponentFixture<BubbleMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
