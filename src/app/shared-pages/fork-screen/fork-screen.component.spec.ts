import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkScreenComponent } from './fork-screen.component';

describe('ForkScreenComponent', () => {
  let component: ForkScreenComponent;
  let fixture: ComponentFixture<ForkScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
