import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTheHillsComponent } from './to-the-hills.component';

describe('ToTheHillsComponent', () => {
  let component: ToTheHillsComponent;
  let fixture: ComponentFixture<ToTheHillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToTheHillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTheHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
