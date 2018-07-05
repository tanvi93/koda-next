import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-drop',
  templateUrl: './step-drop.component.html',
  styleUrls: ['./step-drop.component.scss']
})

/**
 * @name StepDropComponent
 * @description This component contains the empty container wrapped by a drag drop wrapper 
 * which defines the dragging and dropping methods.
 * @param { object } step conatins data of step dropped in drop zone.
 * @method dropData this method applies data of the step dropped in drop container.
 * @method hideErrorMsg This method is called when any step is dragged from drag zone. 
 * Here the error message gets disappear. 
 */

export class StepDropComponent {

  @Input() number;
  @Output() correctSequence = new EventEmitter();
  @Output() displayError = new EventEmitter();
  private step;

  constructor() {
    this.step = {};
   }

  dropData(event) {
      this.step = event.data;
      this.correctSequence.emit(event);
  }

  hideErrorMsg(event) {
    this.displayError.emit(event);
  }

}
