import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyJarComponent } from './candy-jar.component';

describe('CandyJarComponent', () => {
  let component: CandyJarComponent;
  let fixture: ComponentFixture<CandyJarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyJarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyJarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
