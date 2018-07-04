import { Component, ViewChild } from '@angular/core';
import { marsContent } from './../../data/marsRover'
import { MarsOutputSectionComponent } from './mars-output-section/mars-output-section.component';
@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
  
/**
   * @name MarsRoverComponent<app-mars-rover>
   * @description This component will deal mars rover activity in which the user have to grab a water sample for the research purpose.
   * @param contentData its holds entire detail of the page which is passed as an input to its child component.
   * @constructor intiate clearDataFlag and clearMethodCount variable
   */

  /**
   * @method receiveInput
   * @memberOf MarsRoverComponent
   * @param $event This varaible object contains input data from input section of div which needed to pass to output section to see the respective result.
   * @description this is an event based method which get triggered whenever inputSectionComponent emits data .
   */

  /**
   * @method clearInputText
   * @memberOf MarsRoverComponent
   * @param $event This varaible contain boolean value.
   * @description this is an event based method which get triggered whenever outputSectionComponent emit that data indicating that all the animation part get completed from their side.
   */

export class MarsRoverComponent {
  private contentData = marsContent;
  @ViewChild(MarsOutputSectionComponent)
  private marsOutput: MarsOutputSectionComponent;
  private clearMethodCount: number;
  private clearDataFlag: boolean;

  constructor() {
    this.clearDataFlag = false;
    this.clearMethodCount = 0;
  }


  receiveInput($event) {
    this.marsOutput.activityFunction($event[0], $event[1]);
    $event[0] = '';
    $event[1] = '';
  }

  clearInputText($event) {
    ++this.clearMethodCount;
    if (this.clearMethodCount % 2 === 0) {
      this.clearDataFlag = false;
    } else {
      this.clearDataFlag = true;
    }
  }

  hideMsgData = () => {
    this.marsOutput.hideMsgFunc(true);
  }
}