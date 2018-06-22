import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGameElementsComponent } from './summary-game-elements.component';

describe('SummaryGameElementsComponent', () => {
  let component: SummaryGameElementsComponent;
  let fixture: ComponentFixture<SummaryGameElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryGameElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGameElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
