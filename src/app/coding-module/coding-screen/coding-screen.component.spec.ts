import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingScreenComponent } from './coding-screen.component';

describe('CodingScreenComponent', () => {
  let component: CodingScreenComponent;
  let fixture: ComponentFixture<CodingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
