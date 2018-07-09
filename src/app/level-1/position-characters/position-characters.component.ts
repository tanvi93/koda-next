import { Component, OnInit } from '@angular/core';
import { positionCharacterContent } from './../../data/positionCharacterContent';

@Component({
  selector: 'app-position-characters',
  templateUrl: './position-characters.component.html',
  styleUrls: ['./position-characters.component.scss']
})
  
export class PositionCharactersComponent implements OnInit {
  private contentData = positionCharacterContent;
  private flagData: boolean[];
  private errorFlag: boolean;
  
  constructor() { }

  ngOnInit() {
    this.flagData = [false, false, true, false];
    this.errorFlag = false;
  }

  receivedPosDetail($event) {

    // condition for monkey hanging on the top of the stage
    if (Number($event[0].top) >= this.contentData.dragImageContent[0].topPos.minValue) {
      this.contentData.checklist[0].checkListFlag = true;
    } else {
      this.contentData.checklist[0].checkListFlag = false;
    }

    // condition for fruit in monkey's hand
    if ((($event[0].top - $event[1].top) >= $event[0].handTop.min)
      && (($event[0].top - $event[1].top) <= $event[0].handTop.max)
      && (($event[0].left - $event[1].left) >= $event[0].handLeft.min)
      && (($event[0].left - $event[1].left) <= $event[0].handLeft.max)) {
      this.contentData.checklist[1].checkListFlag = true;
    } else {
      this.contentData.checklist[1].checkListFlag = false;
    }

    // condition for cap to the bottom of the stage 
    if (Number($event[2].top) <= this.contentData.dragImageContent[2].topPos.minValue) {
      this.contentData.checklist[2].checkListFlag = true;
    } else {
      this.contentData.checklist[2].checkListFlag = false;
    }

    // condition for cap's left position with respect to monkey's left position
    if (Math.abs(Number($event[0].left) - Number($event[2].left)) > this.contentData.monkeyWidthInUnit) {
      this.contentData.checklist[3].checkListFlag = true;
    } else {
      this.contentData.checklist[3].checkListFlag = false;
    }
    console.log(this.contentData.checklist[0].checkListFlag);
    
    this.flagData[0] = this.contentData.checklist[0].checkListFlag;
    this.flagData[1] = this.contentData.checklist[1].checkListFlag;
    this.flagData[2] = this.contentData.checklist[2].checkListFlag;
    this.flagData[3] = this.contentData.checklist[3].checkListFlag;
  }
  receiveWarning = ($event) => {
    this.errorFlag = $event;
    setTimeout(() => {
      this.errorFlag = false;
    }, 2000);
  }
  hideErrorMsg(ev) {
    console.log(ev);
  }
}
