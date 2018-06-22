import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyZoneComponent } from './blockly-zone.component';

describe('BlocklyZoneComponent', () => {
  let component: BlocklyZoneComponent;
  let fixture: ComponentFixture<BlocklyZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklyZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
