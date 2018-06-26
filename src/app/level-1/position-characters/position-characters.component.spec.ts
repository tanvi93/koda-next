import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCharactersComponent } from './position-characters.component';

describe('PositionCharactersComponent', () => {
  let component: PositionCharactersComponent;
  let fixture: ComponentFixture<PositionCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
