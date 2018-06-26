import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoModalComponent } from './algo-modal.component';

describe('AlgoModalComponent', () => {
  let component: AlgoModalComponent;
  let fixture: ComponentFixture<AlgoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
