import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drop-step',
  templateUrl: './drop-step.component.html',
  styleUrls: ['./drop-step.component.scss']
})

/**
 * @name DropStepComponent
 * @description This component contains the empty container wrapped by a drag drop wrapper 
 * which defines the dragging and dropping methods.
 * @param { object } step conatins data of step dropped in drop zone.
 * @method dropData this method applies data of the step dropped to step variable.
 * @method hideErrorMsg This method is called when any step is dragged from drag zone. 
 * Here the error message gets disappear. 
 */

export class DropStepComponent {
  @Input() number;
  @Output() correctSequence = new EventEmitter();
  @Output() displayError = new EventEmitter();
  private step;
  private changeStyle;

  constructor() {
    this.step = {};
    this.changeStyle = false;
   }

  dropData(event) {
      this.step = event.data;
      this.correctSequence.emit(event);
      if(this.isEmpty(this.step)){
      this.changeStyle = false;
    }else{
      this.changeStyle = true;
    }
  }

  hideErrorMsg(event) {
    this.displayError.emit(event);
  }

  isEmpty(step) {
    for(var key in step) {
        if(step.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
