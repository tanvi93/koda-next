import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-wrapper',
  templateUrl: './drag-wrapper.component.html',
  styleUrls: ['./drag-wrapper.component.scss']
})
export class DragWrapperComponent {

  @Input() msg;
  @Input() seq;
  @Input() splitStep;
  @Output() displayError = new EventEmitter();
  private dropEnabled: Boolean = false;
  private dragEnabled: Boolean = true;
  private dragEnd;
  private dragObj;
  private imageObj;


  constructor() {
    this.dragEnd = false;
    this.imageObj = [];
  }

  private dragStartEvent(event) {
    this.displayError.emit(false);
  }

  private dragEndEvent(event) {
    if (event.dataTransfer.dropEffect === 'move') {
      this.dropEnabled = true;
      this.dragEnabled = false;
      this.dragEnd = true;
      this.msg = '';
    }
  }

  private onItemDrop(event) {
    console.log(this.msg, event.dragData);
    if (this.msg === '' && event.dragData) {
      this.dragEnd = false;
      this.dropEnabled = false;
      this.dragEnabled = true;
      this.msg = event.dragData;
    }
  }

}
