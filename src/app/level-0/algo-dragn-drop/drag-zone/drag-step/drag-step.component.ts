import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-step',
  templateUrl: './drag-step.component.html',
  styleUrls: ['./drag-step.component.scss']
})
export class DragStepComponent {
  @Input() stepObj;
  private step;

  constructor() {
    this.step = '';
   }

  stepDragData(event) {
    this.stepObj = event;
  }
}
