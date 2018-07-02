import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {
  @Input() contentData;
  @Input() clearDataFlag;
  @Output() receiveMsgFlagStatus = new EventEmitter<boolean>();
  @Output() receiveInput = new EventEmitter<object>();
  private stylingObj: object;
  constructor() { 
    this.stylingObj = [];
  }

  ngOnInit() {
    console.log(this.contentData);
    
    this.stylingObj = {
      backgroundColor: this.contentData.mascotBg,
      color: '#3e3a48'
    };
  }

  recievedInput = (event) => {
    console.log(event);
    this.receiveInput.emit(event);
  }

}
