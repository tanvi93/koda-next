import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxGrapeComponent } from './fox-grape.component';

describe('FoxGrapeComponent', () => {
  let component: FoxGrapeComponent;
  let fixture: ComponentFixture<FoxGrapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxGrapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxGrapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
