import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-coordinate',
  templateUrl: './input-coordinate.component.html',
  styleUrls: ['./input-coordinate.component.scss']
})
export class InputCoordinateComponent implements OnInit {
  @Input() inputContent;
  @Output() inputData = new EventEmitter<any>();
  @Output() errorMsgFlag = new EventEmitter<boolean>();
  private inputCoordinateValue: any;
  constructor() { 
    this.inputCoordinateValue = [null, null];
  }

  ngOnInit() {
  }

  clearInput(ev) {
    this.errorMsgFlag.emit(true);
    ev.target.value = '';
  }
 
  inputValue(ev) {
    switch (ev.target.id) {
      case 'x': {
        this.inputCoordinateValue[0] = Number(ev.target.value);
        break;
      }
      case 'y': {
        this.inputCoordinateValue[1] = Number(ev.target.value);
        break;
      }
      default: ;  
    }
  }

  fetchInput() {
    this.inputData.emit(this.inputCoordinateValue);
  }
  // onKeydown($event) {
  //   const allowedValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'Tab', 'Enter', 'Backspace',
  //     'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Shift'];
  //   if (allowedValue.indexOf($event.key) === -1) {
  //     $event.preventDefault();
  //   }
  // }

}
