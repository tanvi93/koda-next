import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameElementsComponent } from './game-elements.component';

describe('GameElementsComponent', () => {
  let component: GameElementsComponent;
  let fixture: ComponentFixture<GameElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
