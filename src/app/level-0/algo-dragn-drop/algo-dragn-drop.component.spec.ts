import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoDragnDropComponent } from './algo-dragn-drop.component';

describe('AlgoDragnDropComponent', () => {
  let component: AlgoDragnDropComponent;
  let fixture: ComponentFixture<AlgoDragnDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoDragnDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoDragnDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
