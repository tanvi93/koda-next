import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotTalkingComponent } from './mascot-talking.component';

describe('MascotTalkingComponent', () => {
  let component: MascotTalkingComponent;
  let fixture: ComponentFixture<MascotTalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotTalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotTalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
