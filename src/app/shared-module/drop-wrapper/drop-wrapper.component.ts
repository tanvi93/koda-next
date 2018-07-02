import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drop-wrapper',
  templateUrl: './drop-wrapper.component.html',
  styleUrls: ['./drop-wrapper.component.scss']
})
export class DropWrapperComponent {

  @Input() seq;
  @Output() dropData = new EventEmitter();
  @Output() stepAtDropZone = new EventEmitter();
  @Output() displayError = new EventEmitter();
  private dropEnabled: Boolean = true;
  private dragEnabled: Boolean = false;
  private dropAlgoStep: String = '';
  private dropAlgoStepObj: any;

  constructor() {
    this.dropAlgoStepObj = {};
  }

  private dragStartEvent(event) {
    this.displayError.emit(false);
  }

  private onItemDrop(event, seq) {
    if (this.dropAlgoStep === '' && event.dragData) {
      this.dropEnabled = false;
      this.dragEnabled = true;
      this.dropAlgoStepObj = { ...event.dragData };
      this.dropAlgoStep = event.dragData;
      this.dropData.emit({'index': seq, 'data': this.dropAlgoStep});
    }
  }

  private onDragEnd(event) {
    if (event.dataTransfer.dropEffect === 'move') {
      this.dropEnabled = true;
      this.dragEnabled = false;
      this.dropAlgoStep = '';
      this.dropData.emit({ 'index': Number(event.target.id), 'data': this.dropAlgoStep });
    }
  }

}
