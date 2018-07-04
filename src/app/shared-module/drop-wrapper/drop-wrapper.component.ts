import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drop-wrapper',
  templateUrl: './drop-wrapper.component.html',
  styleUrls: ['./drop-wrapper.component.scss']
})

/**
 * @name DropWrapperComponent
 * @description This component is used to drag and drop steps from the drop zone .
 * It contains the following methods:
 * @method onItemDrop This method is called when step is drop in this container.
 * Here the drop step data is given to dropAlgoStep and changeStyle variable is made true
 * to change the style of step.The output dropData is given to step container which 
 * contains the step data and the position where it is dropped.
 * The dropEnabled made false so that once a step dropped another step cannot replace it.
 * the dragEnabled made true so that this step can be dragged and placed in any other container.
 * @method onDragEnd This method is called when step is dragged from drop zone and drop in drag zone.
 * Here dropAlgoStepObj object is made empty and output dropData is given.
 * Here again the changeStyle is made false so the previous style is applied back.
 * The dropEnabled made true so that any other step can be dropped here.
 * the dragEnabled made false so the empty container cannot be dragged.
 * @method isEmpty This method is called to check the object is empty or not. 
 */

export class DropWrapperComponent {

  @Input() seq;
  @Output() dropData = new EventEmitter();
  @Output() stepAtDropZone = new EventEmitter();
  @Output() displayError = new EventEmitter();
  private dropEnabled: Boolean = true;
  private dragEnabled: Boolean = false;
  private changeStyle;
  private dropAlgoStepObj: any;

  constructor() {
    this.dropAlgoStepObj = {};
    this.changeStyle = false;
  }

  private dragStartEvent(event) {
    this.displayError.emit(false);
  }

  private onItemDrop(event, seq) {
    if (this.isEmpty(this.dropAlgoStepObj) && event.dragData) {
      this.dropEnabled = false;
      this.dragEnabled = true;
      this.dropAlgoStepObj = event.dragData;
      this.changeStyle = true;
      this.dropData.emit({'index': seq, 'data': this.dropAlgoStepObj});
    }
  }

  private onDragEnd(event) {
    if (event.dataTransfer.dropEffect === 'move') {
      this.dropEnabled = true;
      this.dragEnabled = false;
      this.changeStyle = false;
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
