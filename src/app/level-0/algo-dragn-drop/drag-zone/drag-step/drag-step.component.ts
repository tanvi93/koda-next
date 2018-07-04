import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-step',
  templateUrl: './drag-step.component.html',
  styleUrls: ['./drag-step.component.scss']
})

/**
 * @name DragStepComponent
 * @description This component contains the text and image for each step wrapped by a drag wrapper 
 * which defines the dragging and dropping methods.
 * @param { object } stepObj contains data of the each step that is image and text within it.
 * @method stepDragData This method is called when the step is dropped in the drag zone.
 * Here the data is applied to stepObj. 
 */

export class DragStepComponent {
  @Input() stepObj;
  private changeStyle;

  constructor() {
    this.stepObj = {};
    this.changeStyle = false;
   }

  stepDragData(event) {
    this.stepObj = event.data;
    if(this.isEmpty(this.stepObj)){
      console.log(this.stepObj);
      this.changeStyle = true;
    }else{
      this.changeStyle = false;
      console.log(this.stepObj);
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
