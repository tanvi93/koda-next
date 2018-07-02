import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drop-step',
  templateUrl: './drop-step.component.html',
  styleUrls: ['./drop-step.component.scss']
})
export class DropStepComponent {
  @Input() number;
  private step;
  @Output() correctSequence = new EventEmitter();
  @Output() displayError = new EventEmitter();

  constructor() {
    this.step = '';
   }

  dropData(event) {
    console.log(event);
    this.step = event.data;
    this.correctSequence.emit(event);
  }

  hideErrorMsg(event) {
    this.displayError.emit(event);
  }
}
