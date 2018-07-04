import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { InputCoordinateComponent } from '../../shared/input-coordinate/input-coordinate.component';

@Component({
  selector: 'app-mars-input-section',
  templateUrl: './mars-input-section.component.html',
  styleUrls: ['./mars-input-section.component.scss']
})
export class MarsInputSectionComponent implements OnInit {

  @Input() contentData;
  @Input() clearDataFlag;
  @Output() receiveInput = new EventEmitter<object>();
  @Output() hideMsgData = new EventEmitter<boolean>();
  @ViewChild(InputCoordinateComponent)
  private inputData: InputCoordinateComponent;
  private stylingObj: object;
  constructor() {
    this.stylingObj = [];
  }

  ngOnInit() {
    this.stylingObj = {
      backgroundColor: this.contentData.mascotBg,
      color: '#3e3a48'
    };
  }

  ngOnChanges() {
    this.inputData.clearText();
  }

  recievedInput = (event) => {
    this.receiveInput.emit(event);
  }

  clearMsg = (event) => {
    this.hideMsgData.emit(event);
  }
}