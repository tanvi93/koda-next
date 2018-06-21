import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearFlowScreenComponent } from './linear-flow-screen.component';

describe('LinearFlowScreenComponent', () => {
  let component: LinearFlowScreenComponent;
  let fixture: ComponentFixture<LinearFlowScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearFlowScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearFlowScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
