import { Component, ViewChild } from '@angular/core';
import { FoxOutputSectionComponent } from './fox-output-section/fox-output-section.component';
import { foxGrapeContent } from './../../data/foxGrape';

@Component({
  selector: 'app-fox-grape',
  templateUrl: './fox-grape.component.html',
  styleUrls: ['./fox-grape.component.scss']
})

 /**
   * @name FoxGrapeComponent<app-fox-grape>
   * @description This component will deal fox grape activity in which the user have to grab a grapes as he is hungary and wanted to eat something.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate clearDataFlag and clearMethodCount variable
   */

  /**
   * @method receivedInput
   * @memberOf FoxGrapeComponent
   * @param $event This varaible object contains input data from input section of div which needed to pass to output section to see the respective result.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data .
   */

  /**
   * @method clearInputText
   * @memberOf FoxGrapeComponent
   * @param $event This varaible contain boolean value.
   * @description this is an event based method which get triggered whenever outputSectionComponent emit that data indicating that all the animation part get completed from their side.
   */

export class FoxGrapeComponent {
  private contentData = foxGrapeContent;
  @ViewChild(FoxOutputSectionComponent)
  private foxoutput: FoxOutputSectionComponent;  
  private clearMethodCount: number;
  private clearDataFlag: boolean;
  
  constructor() { 
    this.clearDataFlag = false;
    this.clearMethodCount = 0;
  }

   
  receivedInput = ($event) => {
    this.foxoutput.activityFunction($event[0], $event[1]);
    $event[0] = '';
    $event[1] = '';
  }

  clearInputText = ($event) => {
    ++this.clearMethodCount;
    if (this.clearMethodCount % 2 === 0) {
      this.clearDataFlag = false;
    } else {
      this.clearDataFlag = true;
    }
  }

  hideMsgData = () => {
    this.foxoutput.hideMsgFuncion();
  }
}
