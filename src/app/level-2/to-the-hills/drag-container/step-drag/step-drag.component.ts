import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-drag',
  templateUrl: './step-drag.component.html',
  styleUrls: ['./step-drag.component.scss']
})

/**
 * @name StepDragComponent
 * @description This component contains the text and image for each step wrapped by a drag wrapper 
 * which defines the dragging and dropping methods.
 * @param { object } stepObj contains data of the each step that is image and text within it.
 * @method stepDragData This method is called when the step is dropped in the drag zone.
 * Here the data is applied to stepObj. 
 */

export class StepDragComponent {

  @Input() stepObj;
  private changeStyle;

  constructor() {
    this.stepObj = {};
    this.changeStyle = false;
   }

  stepDragData(event) {
    this.stepObj = event.data;
    if(this.isEmpty(this.stepObj)){
      this.changeStyle = true;
    }else{
      this.changeStyle = false;
    }
  }

  isEmpty(stepObj) {
    for(var key in stepObj) {
        if(stepObj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
