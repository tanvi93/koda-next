import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-drop-wrapper',
  templateUrl: './drag-drop-wrapper.component.html',
  styleUrls: ['./drag-drop-wrapper.component.scss']
})

/**
 * @name DragWrapperComponent
 * @description This component is used to drag and drop steps.
 * It contains the following methods:
 * @method onItemDrop This method is called when step is drop in the container.
 * Here the step data is given to dropAlgoStepObj.The output dropData is given to step container which 
 * contains the step data and the position where it is dropped.
 * The dropEnabled made false so that once a step dropped another step cannot replace it.
 * the dragEnabled made true so that this step can be dragged and placed in any other container.
 * @method onDragEnd This method is called when step is dragged and drop in the container.
 * Here dropAlgoStepObj object is made empty and output dropData is given.
 * The dropEnabled made true so that any other step can be dropped here.
 * the dragEnabled made false so the empty container cannot be dragged.
 * @method dragStartEvent This method is called when the step is drag.
 * Here the error message disappears.
 */

export class DragDropWrapperComponent {

  @Input() dropAlgoStepObj;
  @Input() seq;
  @Output() dropData = new EventEmitter();
  @Output() stepAtDropZone = new EventEmitter();
  @Output() displayError = new EventEmitter();
  private dropEnabled: Boolean = true;
  private dragEnabled: Boolean= true;

  constructor() {
    this.dropAlgoStepObj = {};
  }

  private dragStartEvent(event) {
    this.displayError.emit(false);
  }

  private onItemDrop(event, seq) {
    if (this.isEmpty(this.dropAlgoStepObj) && event.dragData) {
      this.dropEnabled = false;
      this.dragEnabled = true;
      this.dropAlgoStepObj = event.dragData;
      this.dropData.emit({'index': seq, 'data': this.dropAlgoStepObj});
    }
  }

  private onDragEnd(event) {
    if (event.dataTransfer.dropEffect === 'move') {
      this.dropEnabled = true;
      this.dragEnabled = false;
      this.dropAlgoStepObj = {};
      this.dropData.emit({ 'index': Number(event.target.id), 'data': this.dropAlgoStepObj });
    }
  }


   isEmpty(dropAlgoStepObj) {
    for(var key in dropAlgoStepObj) {
        if(dropAlgoStepObj.hasOwnProperty(key))
            return false;
    }
    return true;
}

}
