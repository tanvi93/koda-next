import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drop-wrapper',
  templateUrl: './drop-wrapper.component.html',
  styleUrls: ['./drop-wrapper.component.scss']
})
export class DropWrapperComponent {

  @Input() seq;
  @Input() changeLook;
  @Input() imagesOfSteps;
  @Output() correctSequence = new EventEmitter();
  @Output() stepAtDropZone = new EventEmitter();
  @Output() displayError = new EventEmitter();
  private dropEnabled: Boolean = true;
  private dragEnabled: Boolean = false;
  private dropAlgoStep: String = '';
  private dropAlgoStepObj: any;
  private applyBlue: Boolean;

  constructor() {
    this.applyBlue = false;
  }

  private dragStartEvent(event) {
    this.displayError.emit(false);
  }

  private onItemDrop(event, seq) {
    console.log(event);
    this.applyBlue = true;
    if (this.dropAlgoStep === '' && event.dragData) {
      this.dropEnabled = false;
      this.dragEnabled = true;
      this.dropAlgoStepObj = { ...event.dragData };
      this.dropAlgoStep = event.dragData;
      this.correctSequence.emit({ 'index': seq, 'order': event.dragData.order, 'msg': event.dragData.msg, 'data': this.dropAlgoStep });
    }
  }

  private onDragEnd(event) {
    if (event.dataTransfer.dropEffect === 'move') {
      this.dropEnabled = true;
      this.dragEnabled = false;
      this.applyBlue = false;
      this.dropAlgoStep = '';
      this.correctSequence.emit({ 'index': Number(event.target.id), 'order': '' });
    }
  }

}
