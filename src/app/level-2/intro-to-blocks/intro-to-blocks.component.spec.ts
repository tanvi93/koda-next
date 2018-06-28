import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToBlocksComponent } from './intro-to-blocks.component';

describe('IntroToBlocksComponent', () => {
  let component: IntroToBlocksComponent;
  let fixture: ComponentFixture<IntroToBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
