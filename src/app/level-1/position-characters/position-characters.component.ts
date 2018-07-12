import { Component, OnInit, ViewChild } from '@angular/core';
import { positionCharacterContent } from './../../data/positionCharacterContent';
import { PositionValidationComponent } from './position-validation/position-validation.component'


@Component({
  selector: 'app-position-characters',
  templateUrl: './position-characters.component.html',
  styleUrls: ['./position-characters.component.scss']
})

/**
   * @name PositionCharactersComponent<app-position-characters>
   * @description This component will deal positioning of choosen character which user have choosen in select character activity
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate flagData and error flag.
   */

  /**
   * @method receivedPosDetail
   * @memberOf PositionCharactersComponent
   * @param $event This varaible object contains the position of all character which will then be verified with the validation on the input side and if its succeed we will get correct tick beside the task.
   * @description this is an event based method which get triggered whenever the user move/change the position of the character.
   */

  /**
   * @method receiveWarning
   * @memberOf PositionCharactersComponent
   * @param $event This varaible contain boolean value.
   * @description this is an event based method which get triggered it will keep the flag toggling so that validation will detect change event.
   */

  /**
   * @method hideErrorMsg
   * @memberOf PositionCharactersComponent
   * @param $event This varaible contain boolean value.
   * @description this is an event based method which get triggered whenever user changes position of character which trigger an event to let the parent know about hiding error msg.
   */

export class PositionCharactersComponent implements OnInit {
  @ViewChild(PositionValidationComponent)
  private positionInput: PositionValidationComponent;
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
    this.positionInput.hideError();
  }
}
