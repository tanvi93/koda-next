import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationContainerComponent } from './narration-container.component';

describe('NarrationContainerComponent', () => {
  let component: NarrationContainerComponent;
  let fixture: ComponentFixture<NarrationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
